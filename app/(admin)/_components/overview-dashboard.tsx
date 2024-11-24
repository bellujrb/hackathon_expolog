"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngTuple } from "leaflet"; 
import "leaflet/dist/leaflet.css";

const customIcon = new L.DivIcon({
  html: `
    <div style="
      background-color: #2e86de;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #ffffff;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    ">
      <span style="color: white; font-size: 12px; font-weight: bold;">★</span>
    </div>
  `,
  className: "",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

interface RecommendedLocation {
  id: number;
  name: string;
  position: LatLngTuple; 
  description: string;
}

const recommendedLocations: RecommendedLocation[] = [
  {
    id: 1,
    name: "Porto do Pecém",
    position: [-3.5462, -38.7946],
    description:
      "Proximidade com o Porto do Pecém, infraestrutura industrial consolidada.",
  },
  {
    id: 2,
    name: "Região Metropolitana de Fortaleza",
    position: [-3.7172, -38.5434],
    description:
      "Fácil acesso logístico, mão de obra qualificada e conectividade com o Nordeste.",
  },
  {
    id: 3,
    name: "Quixadá",
    position: [-4.9708, -39.0164],
    description:
      "Área com terrenos acessíveis e grande extensão, ideal para grandes plantas.",
  },
  {
    id: 4,
    name: "Sobral",
    position: [-3.6894, -40.3482],
    description:
      "Polo industrial regional, com conectividade ao Porto do Pecém.",
  },
];

export default function OverviewDashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-bold">Mapa de Locais Recomendados</h3>
      <p>Clique em um marcador para mais informações.</p>
      <div className="w-full h-[400px] rounded-lg overflow-hidden mt-4">
        <MapContainer
          center={[-3.7172, -38.5434]} // Centralizado no Ceará
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {recommendedLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.position} // Tipo garantido como LatLngTuple
              icon={customIcon}
            >
              <Popup>
                <strong>{location.name}</strong>
                <p>{location.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
