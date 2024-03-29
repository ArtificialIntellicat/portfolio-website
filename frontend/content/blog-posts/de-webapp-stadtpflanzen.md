---
title: "Webapp „Stadtpflanzen“ zur Förderung von gesellschaftlichem Engagement in Grünanlagen"
date: "2024-03-26"
skills: ["Machine Learning", "Python", "Data Collection", "Flask", “sentiment analysis”, “topic modelling”, “Projektplanung”, “Projektmanagement”]
githubLink: "https://github.com/ArtificialIntellicat/green-space-discovery"
projectLink: "https://stadtpflanzen-3fed77b30e89.herokuapp.com"
---

Die Faszination für Künstliche Intelligenz und die Leidenschaft fürs Programmieren sind nicht die einzigen Gründe, warum ich im Machine Learning arbeiten möchte – ich sehe in der Künstlichen Intelligenz auch großes Potenzial zur Förderung von Bildung und Nachhaltigkeit. Das wollte ich mit einem [neuen Portfolio Projekt](https://github.com/ArtificialIntellicat/green-space-discovery) erproben und konzipierte eine Webapp namens „Stadtpflanzen“ zur Verbesserung von Grünanlagen in städtischen Gebieten durch gesellschaftliches Engagement. 

### Die Idee
In der [Webapp „Stadtpflanzen“]( https://stadtpflanzen-3fed77b30e89.herokuapp.com) hat jede eingetragene Grünanlage eine Community, in der Mitglieder über Posts kommunizieren und Pläne schmieden können. Jede:r User:in kann Grünanlagen hinzufügen und bestehende Grünanlagen nach verschiedenen Nachhaltigkeits- und sozialen Faktoren bewerten. Ein Machine Learning Algorithmus soll aus den Bewertungen analysieren, was an den entsprechenden Grünanlagen verbessert werden könnte und dies in den Communities vorschlagen (z.B. postet die KI einen Clean-Up oder eine vorbereitete Petition für mehr Bänke/Mülleimer/etc. in die Community, wenn sich häufig über Müll/zu wenig Bänke/etc. beschwert wurde). So soll gesellschaftliches Engagement und Community Building um Grünanlagen gefördert werden.

### Was bisher geschah
#### Welche Sprachen, Frameworks und Technologien?
Diese Frage steht natürlich am Anfang jedes Projekts. Da ich meine Skills in Python verbessern möchte und Python sich gut für Machine Learning Aufgaben eignet, wählte ich diese Sprache. Für das Frontend wählte ich Flask, was ich schon erfolgreich im meinem [Cat Breed Classifier](https://github.com/ArtificialIntellicat/cat-breed-classifier) Projekt verwendet hatte.<br><br>

#### Der Prozess
Ich begann, zunächst das Skelett der Webapp aufzubauen: Zuerst erstellte ich eine Datenbank, eine Index-Seite, welche die Grünanlagen in Tabellenform anzeigen sollte, sowie Seiten zur Erstellung von User:innen, Grünanlagen und Bewertungen. Danach fügte ich Funktionalität hinzu, durch die jede Grünanlage eine Community bekommt, der User:innen frei beitreten können, um zu dieser Grünanlage zu posten. Nach und nach fügte ich weitere Funktionalitäten und Details hinzu, sodass Daten gelöscht und verändert werden konnten, und verbesserte das Frontend. 
Ich war froh, dass ich mir schon im Vorhinein ein recht ausführliches Konzept erstellt hatte von dem, was ich programmieren wollte, sodass ich diese Schritte einfach „abarbeiten“ konnte. Trotzdem zeigt der Prozess immer wieder neue Herausforderungen, zeigt Denkfehler auf und wirft neue Ideen in den Raum. Um wirklich eine benutzbare Plattform ins Leben zu rufen, müssen doch recht viele kleine Designherausforderungen gemeistert und Funktionalitäten beachtet werden.<br><br>

#### Woher kommen die Daten?
Bevor ich das Projekt begann, hatte ich die vage Vorstellung, dass ich vielleicht über Google Maps o.ä. an Userbewertungen kommen könnte, um mein Modell zu trainieren. Schnell stellte ich jedoch fest, dass in meinen Bewertungen sehr spezifische Faktoren abgefragt werden, die ich nicht ohne Weiteres aus solchen Bewertungen einspeisen kann. Es bleibt mir also nichts anderes übrig, als selbst Daten zu sammeln. Aber warum nicht? Schließlich ist es ein gutes Training, so ein Projekt von vorne bis hinten selbst durchzuführen und dabei die Datenqualität selbst in der Hand zu haben. Ich erstellte also eine [Umfrage](https://docs.google.com/forms/d/e/1FAIpQLSfFvYT_Q0R6MdF7uDJtvqgTpO-LFCnmD9h3N0-4jUfiURkQCw/viewform) und Definitionen für die bewertbaren Faktoren und verschickte sie an so viele Menschen wie möglich – und nun heißt es abwarten und Tee trinken (viele Liter, das tu ich doch gern), bevor das Modell wirklich trainiert werden und das Projekt vollendet werden kann.<br><br>

### Herausforderungen
#### Datenerhebung
Da ich meine Daten selbst sammle und meine finanziellen Ressourcen sehr eingeschränkt sind, muss ich auf die Gunst meiner Mitmenschen hoffen in der Erstellung von Bewertungen zu Grünanlagen. Für die Idee habe ich sehr viel positives Feedback bekommen, Umfrageanworten jedoch (zu) wenige. Nun muss ich also nochmal Leute knechten. 😉<br><br>

#### Praktische Umsetzung
Dieses Projekt ist zunächst nur ein Portfolio Projekt für mich zur Übung und für meine Bewerbungen. Wenn ich das Projekt aber in der Realität benutzen wollen würde, stellen sich einige Fragen, die sich vor allem um Datenqualität und ethische Bedenken zentrieren: Wer stellt sicher, dass jede Grünanlage nur einmal vorkommt? Wer bekommt die „Macht“ Grünanlageneinträge zu verwalten? Sollte es dafür eine Moderatorenrolle geben? Wie würden sich Menschen finden, die Lust hätten eine solche Rolle auszuführen? Wer moderiert Bewertungen und Community Posts, sodass diese keine fragwürdigen Inhalte enthalten?
Wahrscheinlich müsste man für sowas einen Verein mit motivierten Menschen gründen, die es sich zur Aufgabe machen, dieses Projekt ins Leben zu rufen und am Leben zu halten. Aber das sind Überlegungen für eine Zukunft, in der dieses Projekt tatsächlich praktische Anwendung finden soll.<br><br>

#### Deployment mit begrenzten finanziellen Mitteln
Wenn man kein Geld hat, ist es gar nicht so einfach, eine geeignete Plattform für das Deployment eines solches Projekts zu finden. Zwar bieten viele Plattformen wie Heroku, Google Cloud Functions und AWS kostenlose Dienste an, doch diese funktionieren für ein solches Projekt, in dem im Bestfall viel Interaktion stattfinden soll, nur mäßig. Ich entschied mich für [Heroku]( https://stadtpflanzen-3fed77b30e89.herokuapp.com), doch dort funktioniert die App nur mäßig und hat ständig Ladefehler. In Zukunft werde ich weitere Möglichkeiten austesten, doch aktuell möchte ich mich mehr auf die Bewertungen und das Training des Modells konzentrieren sowie meine theoretische Fundierung im Machine Learning erweitern und verbessern.

### Was kommt als Nächstes?
Wenn ich genug Bewertungen zusammen habe, werde ich mein Modell trainieren und ausgiebig testen. Dafür möchte ich vermutlich sentiment analysis und topic modelling verwenden und Kategorien klassifizieren, die ausführbare Handlungen (wie z.B. Clean Up) darstellen. Wie genau ich das umsetze und kombiniere, hängt von den Ergebnissen ab. Learning by doing, wie immer. 😊
