"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AppointmentModal } from "./appointment-modal";
import { CommandPalette } from "./command-palette";
import { MobileActionBar } from "./mobile-bar";

interface ModalContextType {
  openAppointment: (defaultArea?: string) => void;
  closeAppointment: () => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentArea, setAppointmentArea] = useState<string | undefined>(undefined);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const openAppointment = (area?: string) => {
    setAppointmentArea(area);
    setAppointmentOpen(true);
  };

  const closeAppointment = () => {
    setAppointmentOpen(false);
  };

  const openCommandPalette = () => {
    setCommandPaletteOpen(true);
  };

  const closeCommandPalette = () => {
    setCommandPaletteOpen(false);
  };

  // Global Ctrl+K / Cmd+K klavye kısayolu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openAppointment,
        closeAppointment,
        openCommandPalette,
        closeCommandPalette,
      }}
    >
      {children}

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={closeAppointment}
        defaultArea={appointmentArea}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={closeCommandPalette}
        onOpenAppointment={() => openAppointment()}
      />

      <MobileActionBar onOpenAppointment={() => openAppointment()} />
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}
