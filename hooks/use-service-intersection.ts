import { ServiceIds } from "./../store/service";
import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import { useServiceStore } from "@/store/service";

export const useServiceIntersection = (serviceId: string, threshold = 0.9) => {
  const setActiveServiceId = useServiceStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement>(null);

  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
    threshold,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveServiceId(serviceId as ServiceIds);
    }
  }, [intersection?.isIntersecting, serviceId, setActiveServiceId]);

  return intersectionRef;
};
