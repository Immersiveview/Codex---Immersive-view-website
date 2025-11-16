export const metadata = {
  title: "Datenschutz | Immersive View"
};

export default function DatenschutzPage() {
  return (
    <div className="section-padding max-w-3xl space-y-8">
      <div>
        <h1 className="text-4xl font-semibold text-black">Datenschutzerklärung</h1>
        <p className="mt-4 text-neutral-700">
          Wir freuen uns über Ihr Interesse an unserem Unternehmen und unserer Website. Der Schutz Ihrer Daten ist uns
          wichtig. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf
          unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO).
        </p>
      </div>

      <section className="space-y-4 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">1. Verantwortliche Stelle</h2>
        <p>Immersive View GbR</p>
        <p>Jesse Rohdenburg &amp; Maurice Kräwer</p>
        <p>Küferstraße 4</p>
        <p>54331 Oberbillig</p>
        <p>Deutschland</p>
        <p>(kein Publikumsverkehr)</p>
        <p>E-Mail: jesse.rohdenburg@immersive-view.net / maurice.kraewer@immersive-view.net</p>
        <p>Telefon: +49 173 3212572 / +49 1525 2360488</p>
      </section>

      <section className="space-y-4 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">
          2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung
        </h2>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">a) Beim Besuch der Website</h3>
          <p>Wenn Sie unsere Website aufrufen, erfasst der Server automatisch folgende Informationen:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p>
            Diese Daten sind technisch erforderlich, um einen sicheren und stabilen Betrieb der Website zu gewährleisten
            (Art. 6 Abs. 1 lit. f DSGVO). Eine personenbezogene Auswertung findet nicht statt.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">b) Bei Kontaktaufnahme per E-Mail</h3>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (z. B. Name, E-Mail-Adresse und
            Inhalt der Nachricht) zur Bearbeitung Ihres Anliegens verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO.
          </p>
        </div>
      </section>

      <section className="space-y-3 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">3. Weitergabe von Daten</h2>
        <p>Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Sie Ihre ausdrückliche Einwilligung erteilt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
          <li>dies zur Vertragserfüllung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO), oder</li>
          <li>eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO).</li>
        </ul>
      </section>

      <section className="space-y-3 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">4. Rechte der betroffenen Person</h2>
        <p>Sie haben das Recht:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Auskunft über die gespeicherten Daten zu verlangen (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
          <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
          <li>Ihre Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>Bitte wenden Sie sich hierzu an: jesse.rohdenburg@immersive-view.net</p>
      </section>

      <section className="space-y-3 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">5. Speicherung und Löschung von Daten</h2>
        <p>Ihre Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
      </section>

      <section className="space-y-3 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">6. Verwendung von Cookies</h2>
        <p>Unsere Website kann Cookies verwenden, um die Benutzerfreundlichkeit zu verbessern. Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO.</p>
      </section>

      <section className="space-y-3 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">7. Eingebettete Inhalte (Kuula)</h2>
        <p>
          Wir verwenden einen eingebetteten Tour-Viewer des Anbieters <strong>Kuula.co</strong>. Beim Laden des Viewers
          können Daten (z. B. IP-Adresse) an Kuula übertragen werden. Es gelten die Datenschutzbestimmungen von Kuula.
        </p>
      </section>

      <section className="space-y-3 text-neutral-700">
        <h2 className="text-2xl font-semibold text-black">8. Änderung dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen unserer Website oder gesetzlichen Vorgaben anzupassen.</p>
      </section>
    </div>
  );
}
