---
title: Autonomiczne Roboty Mobilne
lead: Prof. Jan Kowalski
team:
  - Prof. Jan Kowalski
  - Dr. Anna Nowak
  - Doktorant - Marek Lewandowski
  - Doktorantka - Katarzyna Dąbrowska
projects:
  - "EU Horizon 2020: Inteligentne Systemy Nawigacji"
  - "Grant NCN: Koordynacja Wielorobotowa"
  - "Partnerstwo Przemysłowe: Automatyzacja Magazynów"
---

Badania nad autonomicznymi robotami mobilnymi koncentrują się na opracowywaniu inteligentnych systemów zdolnych do nawigacji w złożonych środowiskach bez interwencji człowieka. Nasza praca obejmuje podstawy teoretyczne do praktycznych implementacji.

## Przegląd

Autonomiczne roboty mobilne stają się coraz ważniejsze w różnych zastosowaniach, od automatyzacji magazynów po robotykę usługową. Nasze badania dotyczą kluczowych wyzwań w:

- **Planowanie Ścieżki**: Opracowywanie efektywnych algorytmów do znajdowania optymalnych ścieżek w złożonych środowiskach
- **Lokalizacja i Mapowanie**: Tworzenie dokładnych map przy jednoczesnym określaniu pozycji robota (SLAM)
- **Unikanie Przeszkód**: Wykrywanie i unikanie przeszkód statycznych i dynamicznych w czasie rzeczywistym
- **Koordynacja Wielorobotowa**: Umożliwienie zespołom robotów efektywnej współpracy

## Formulacja Matematyczna

Problem planowania ścieżki można sformułować jako zadanie optymalizacji. Biorąc pod uwagę przestrzeń konfiguracji $\mathcal{C}$ i region przeszkód $\mathcal{C}_{obs}$, szukamy ciągłej ścieżki:

$$\gamma: [0,1] \rightarrow \mathcal{C}_{free}$$

gdzie $\mathcal{C}_{free} = \mathcal{C} \setminus \mathcal{C}_{obs}$, takiej że:

$$\gamma(0) = q_{start}, \quad \gamma(1) = q_{goal}$$

Funkcja kosztu do minimalizacji to:

$$J(\gamma) = \int_0^1 c(\gamma(t), \dot{\gamma}(t)) dt$$

gdzie $c$ reprezentuje koszt przejścia ścieżki.

## Obecne Wyniki

Nasze ostatnie prace wykazały:
- 30% poprawę efektywności planowania ścieżki przy użyciu nauczonych heurystyk
- Pomyślne wdrożenie systemów wielorobotowych w środowiskach przemysłowych
- Unikanie przeszkód w czasie rzeczywistym w dynamicznych środowiskach z 99,8% wskaźnikiem sukcesu

## Przyszłe Kierunki

We are exploring:
- Integration of deep reinforcement learning for adaptive navigation
- Energy-efficient path planning for long-duration missions
- Robust navigation under sensor failures and uncertainties
