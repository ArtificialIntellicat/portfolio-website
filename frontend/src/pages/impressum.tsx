import React from 'react';
import Layout from '../app/Layout';

const Impressum = () => {
  return (
    <Layout>
      <div className="content-section mx-auto my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Impressum</h2>
        <h3 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h3>
        <p className="my-2">Toni Helesic</p>
        <p className="my-2">Vorgebirgsstr. 64</p>
        <p className="my-2">53119 Bonn</p>

        <h3 className="text-xl font-semibold mt-6">Kontakt</h3>
        <p className="my-2">E-Mail: antonia[dot]helesic[at]gmail[dot]com</p>
        {/* Include your phone number if you want to provide it */}
        
        <h3 className="text-xl font-semibold mt-6">Haftungsausschluss</h3>

        <b>1. Warnhinweis zu Inhalten</b>

        <p className='mb-4'>Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Die Nutzung dieser Webseiteninhalte erfolgt auf eigene Gefahr. Allein durch den Aufruf dieser kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.</p>

        <b>2. Verlinkungen</b>

        <p className='mb-4'>Die Webseite enthält Verlinkungen zu anderen Webseiten ("externe Links"). Diese Webseiten unterliegen der Haftung der jeweiligen Seitenbetreiber. Bei Verknüpfung der externen Links waren keine Rechtsverstöße ersichtlich. Auf die aktuelle und künftige Gestaltung der verlinkten Seiten hat der Anbieter keinen Einfluss. Die permanente Überprüfung der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Bekanntwerden von Rechtsverstößen werden die betroffenen externen Links unverzüglich gelöscht.</p>

        <b>3. Urheberrecht / Leistungsschutzrecht</b>

        <p>Die auf dieser Webseite durch den Anbieter veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht und Leistungsschutzrecht. Alle vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt vor allem für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Dabei sind Inhalte und Rechte Dritter als solche gekennzeichnet. Das unerlaubte Kopieren der Webseiteninhalte oder der kompletten Webseite ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.</p>
        <p className='mb-4'>Diese Website darf ohne schriftliche Erlaubnis nicht durch Dritte in Frames oder iFrames dargestellt werden.</p>

        <b>4. Keine Werbung</b>

        <p className='mb-4'>Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten.</p>

        <b>5. Besondere Nutzungsbedingungen</b>
        <p>Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Bedingungen.</p>

      </div>
    </Layout>
  );
};

export default Impressum;
