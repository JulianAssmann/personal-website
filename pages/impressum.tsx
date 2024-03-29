import Head from 'next/head';
import { Component } from "react";
import Copyright from "../components/copyright";
import styles from '../styles/impressum.module.css';

class Impressum extends Component<{}, {}> {
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Julian Aßmann - Impressum</title>
                    <meta name="description" content="Impressum" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1>Impressum</h1>
                    <p>
                        <b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</b> <br />
                        Julian Aßmann <br />
                        Stephanienstraße 36<br />
                        76133 Karlsruhe<br />
                    </p>

                    <p>
                        <strong>Kontakt</strong> <br />
                        Mobil: +49 1525 8761908 <br />
                        Email: <a href="mailto:kontakt@julianassmann.de">kontakt@julianassmann.de</a> <br />
                    </p>

                    <p>
                        <b>Haftungsausschluss</b>
                    </p>

                    <p>
                        <b>Haftung für Inhalte</b> <br />
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                        können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                        sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                        sind wir als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu überwachen
                        oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                        der Nutzung von Informationen nach den allgemeinen Gesetzen
                        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                        erst ab dem Zeitpunkt der Kenntnis einer konkreten
                        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                        können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                        sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                        sind wir als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu überwachen
                        oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                        der Nutzung von Informationen nach den allgemeinen Gesetzen
                        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                        erst ab dem Zeitpunkt der Kenntnis einer konkreten
                        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>

                    <p>
                        <b>Haftung für Links</b> <br />
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                        deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                        diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                        oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                        wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                        überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
                        der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>

                    <p>
                        <b>Urheberrecht</b> <br />
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                        diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                        kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                        Seite nicht vom Betreiber erstellt wurden, werden die
                        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.
                    </p>

                    <p>
                        <b>Datenschutz</b> <br />
                        Es werden keine Daten erhoben.
                    </p>

                    <p>
                        Haftungsausschluss von <a href="https://www.impressum-generator.de">https://www.impressum-generator.de</a>
                    </p>

                </main>

                <footer>
                    <Copyright />
                </footer>
            </div>
        )
    }
}

export default Impressum
