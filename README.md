# YBTG Local Booking

## CAS Aufgabenstellung

Aus dem fachlichen Gesamtumfang von YBTG sollen Sie die Buchungen von lokalen Veranstaltungen beispielhaft implementieren.

Gehen Sie von folgenden fachlichen Gegebenheiten aus:

* lokale Veranstaltungen sind Leistungen, die Reisende zusätzlich buchen können
* lokale Veranstaltungen werden z.B. beschrieben durch:
  * Art
  * Bezeichnung
  * Ort
  * Datum
  * Anfangzeit
  * Endzeit
  * Kosten
  * Anmeldefrist
  * Veranstalter (nur Bezeichnung, kein eigener Datenbestand)

* die lokalen Veranstaltungen werden den Reisenden gegenüber durch die (lokale) Agentur angeboten
* Reisende können lokale Veranstaltungen abrufen/recherchieren, auswählen, buchen und stornieren
* die (lokale) Agentur betreut Reisende während der Reise, d.h. die (lokale) Agentur "sieht" alle aktuellen Reisen der Anbieter, die mit der (lokalen) Agentur zusammenarbeiten.

Es werden folgende Benutzungsschnittstellen benötigt:
* für Reisende (mobiles Endgerät -> Simulation)
  * Informationen zur aktuellen Reise
  * Informationen zur (lokalen) Agentur
  * Recherche lokaler Veranstatungen
  * Auswahl / Buchung lokale Veranstaltung
  * Anzeige der gebuchten lokalen Veranstaltungen
  * Erinnerung an eine lokale Veranstaltung
  * Stornierung einer Buchung
* für die (lokale) Agentur (Desktop):
  * Anzeige und Auswahl der zu betreuenden Reisenden
  * Pflege des Datenbestands der lokalen Veranstaltungen 
  * Anbieten von lokalen Veranstaltungen (gezielte Angebote an einzelne Reisende) 
  * Auswertung der Buchungen und Stornierungen der lokalen Veranstaltungen.

Wenn Ihnen ausreichend Zeit zur Verfügung steht, können Sie den fachlichen Umfang nach eigenen Überlegungen erweitern.

## Entwicklung

* `git clone`
* `npm install`
