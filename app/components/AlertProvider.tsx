"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Alert, AlertIcon, AlertDescription, Box, Collapse } from "@chakra-ui/react";

type AlertContextType = {
  showAlert: (message: string, status?: "info" | "warning" | "success" | "error", duration?: number) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<{ message: string; status: "info" | "warning" | "success" | "error"; duration: number } | null>(null);

  const showAlert = useCallback((message: string, status: "info" | "warning" | "success" | "error" = "info", duration = 3000) => {
    setAlert({ message, status, duration });
  }, []);

  useEffect(() => {
    if (!alert) return;
    const timer = setTimeout(() => setAlert(null), alert.duration);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {/* Fixed top alert */}
      <Box position="fixed" top="20px" left="50%" transform="translateX(-50%)" zIndex={9999} w="auto">
        <Collapse in={!!alert} animateOpacity>
          {alert && (
            <Alert status={"error"} variant="solid" borderRadius="md" boxShadow="lg">
              <AlertIcon />
              <AlertDescription>{"ستتوفر خدمات فورمي قريبا ..."}</AlertDescription>
              {/* <AlertDescription>{alert.message}</AlertDescription> */}
            </Alert>
          )}
        </Collapse>
      </Box>
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used inside AlertProvider");
  return context.showAlert;
}
