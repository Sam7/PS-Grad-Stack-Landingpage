import funnelImage from "../../assets/GraduateProgramApplicationFunnel.webp";

export function FunnelInfographic() {
  return (
    <div className="w-full">
      <img
        src={funnelImage}
        alt="Graduate Program Application Funnel - Shows elimination rates at each stage from ATS screening through final interview"
        className="w-full h-auto"
      />
    </div>
  );
}
