export const metadata = {
  title: "Impressum | Immersive View"
};

export default function ImpressumPage() {
  return (
    <div className="section-padding max-w-3xl space-y-8">
      <div>
        <h1 className="text-4xl font-semibold text-black">Impressum</h1>
        <p className="mt-2 text-neutral-600">Angaben gemäß § 5 TMG</p>
      </div>

      <div className="space-y-2 text-neutral-700">
        <p className="font-semibold text-black">Immersive View GbR</p>
        <p>Jesse Rohdenburg &amp; Maurice Kräwer</p>
        <p>Küferstraße 4</p>
        <p>54331 Oberbillig</p>
        <p>Deutschland</p>
        <p>(kein Publikumsverkehr)</p>
      </div>

      <div className="space-y-2 text-neutral-700">
        <p>Telefon: +49 173 3212572 / +49 1525 2360488</p>
        <p>E-Mail: jesse.rohdenburg@immersive-view.net / maurice.kraewer@immersive-view.net</p>
        <p>
          Website:{" "}
          <a href="https://www.immersive-view.net" className="text-black underline">
            https://www.immersive-view.net
          </a>
        </p>
      </div>

      <div className="space-y-1 text-neutral-700">
        <p className="font-semibold text-black">Vertretungsberechtigte Gesellschafter:</p>
        <p>Jesse Rohdenburg &amp; Maurice Kräwer</p>
      </div>

      <div className="space-y-1 text-neutral-700">
        <p className="font-semibold text-black">Umsatzsteuer-ID:</p>
        <p>nicht vorhanden (Kleinunternehmer gemäß § 19 UStG)</p>
      </div>

      <hr className="border-neutral-200" />

      <section className="space-y-6 text-neutral-700">
        <div>
          <h2 className="text-2xl font-semibold text-black">Haftungsausschluss (Disclaimer)</h2>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-black">Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-black">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-black">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </section>
    </div>
  );
}
