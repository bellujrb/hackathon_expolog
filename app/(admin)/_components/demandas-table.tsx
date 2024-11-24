"use client";

import * as XLSX from "xlsx";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(admin)/_components/ui/table";

// Dados fictícios para ESG por planta
interface ESGRelatorio {
  planta: string;
  emissaoCO2: number; // Emissão de CO₂ (em toneladas).
  consumoAgua: number; // Consumo de água (em litros).
  energiaRenovavel: number; // Percentual de uso de energia renovável.
  diversidade: number; // Percentual de diversidade na equipe.
  governanca: string; // Índice de governança (alta, média, baixa).
}

const esgRelatorios: ESGRelatorio[] = [
  {
    planta: "Planta A",
    emissaoCO2: 1200,
    consumoAgua: 300000,
    energiaRenovavel: 75,
    diversidade: 45,
    governanca: "Alta",
  },
  {
    planta: "Planta B",
    emissaoCO2: 800,
    consumoAgua: 200000,
    energiaRenovavel: 60,
    diversidade: 50,
    governanca: "Média",
  },
  {
    planta: "Planta C",
    emissaoCO2: 1800,
    consumoAgua: 400000,
    energiaRenovavel: 80,
    diversidade: 40,
    governanca: "Alta",
  },
  {
    planta: "Planta D",
    emissaoCO2: 1500,
    consumoAgua: 250000,
    energiaRenovavel: 50,
    diversidade: 30,
    governanca: "Baixa",
  },
];

// Colunas da tabela ESG
const columns: ColumnDef<ESGRelatorio>[] = [
  {
    accessorKey: "planta",
    header: "Planta",
    cell: ({ row }) => <div className="font-medium">{row.getValue("planta")}</div>,
  },
  {
    accessorKey: "emissaoCO2",
    header: "Emissão de CO₂ (t)",
    cell: ({ row }) => <div>{row.getValue("emissaoCO2")} t</div>,
  },
  {
    accessorKey: "energiaRenovavel",
    header: "Energia Renovável (%)",
    cell: ({ row }) => <div>{row.getValue("energiaRenovavel")}%</div>,
  },
  {
    accessorKey: "diversidade",
    header: "Diversidade (%)",
    cell: ({ row }) => <div>{row.getValue("diversidade")}%</div>,
  },
  {
    accessorKey: "governanca",
    header: "Governança",
    cell: ({ row }) => <div>{row.getValue("governanca")}</div>,
  },
];

// Exportar dados ESG para Excel
function exportToXlsx(data: ESGRelatorio[]) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Relatorio ESG");

  const now = new Date();
  const filename = `Relatorio_ESG_${now.toISOString().slice(0, 10)}.xlsx`;

  XLSX.writeFile(wb, filename);
}

export function RelatorioESGTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: esgRelatorios,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 w-full">
        <Input
          placeholder="Buscar por planta..."
          value={(table.getColumn("planta")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("planta")?.setFilterValue(event.target.value)
          }
          className="w-full max-w-sm sm:w-auto"
        />
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => exportToXlsx(esgRelatorios)}
        >
          Exportar Relatório
        </Button>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nenhum dado encontrado...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
