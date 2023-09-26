# Schema
![](https://i.imgur.com/fx6kVK0.jpg)
- Usare il file [**JLDB_Build.sql**](https://raw.githubusercontent.com/nicolovitelli/sql-exercises/master/it/JLDB_Build.sql) per la creazione dello schema.

# Query
Scrivere le query SQL che restituiscano le seguenti informazioni:
1. Tutti i record della tabella ORDERS.
2. Tutte le città dei Clienti.
3. Tutti i nomi e cognomi dei Clienti.
4. Tutti i titoli dei Libri univoci.
5. Tutti i nomi e cognomi dei Clienti, in un'unica colonna.
6. Gli Ordini con ID 1000.
7. Gli Ordini con il costo di spedizione compreso tra 3 e 5.
8. I Libri pubblicati il 17 Luglio 2004.
9. I Libri pubblicati il 21 Gennaio 2005 ed il 9 Maggio 2003.
10. Data di spedizione dei Libri spediti nello stato "WA".
11. Differenza tra la data di spedizione e data dell'ordine di ogni Ordine.
12. Tutti gli Ordini che sono stati spediti.
13. Tutti gli Ordini spediti dopo il 3 Aprile 2009 nello stato "FL".
14. Tutti gli Ordini che non sono stati spediti nello stato "NJ" ed il costo di spedizione è minore di 4.
15. Tutti i Libri nella categoria "COMPUTER" che contengano la parola "ORACLE" nel titolo.
16. Tutti gli Ordini che hanno un costo di spedizione uguale a 3 oppure sono stati spediti nella città di Austin.
17. Tutti i Libri che non sono stati ordinati il 14 Dicembre 2005 o il 18 Marzo 2006.
18. Tutti gli Ordini che non hanno un costo di spedizione e sono stati spediti il 4 Aprile 2009 o 5 Aprile 2009.
19. Tutti i titoli dei Libri e la loro relativa Categoria. Entrambi dovranno essere stampati in un'unica colonna con l'alias "LIBRI E CATEGORIA". Infine, filtrare solo i Libri che hanno un costo compreso tra €4.50 e €10.99.
20. Tutti i titoli dei Libri il cui titolo contiene il numero 10 e la Categoria inizia con la lettera "F" e finisce con la lettera "S".
21. Tutti gli Ordini creati dal Cliente "JAKE LUCAS".
22. Tutti i Libri scritti da "SAM SMITH".
23. Tutti i Libri scritti da "SAM SMITH" e pubblicati da "READING MATERIALS INC."
24. Tutti i titoli dei Libri ordinati dallo stato "FL" e dai Clienti il cui cognome contiene la lettera "C".
25. Tutti i nomi e cognomi dei Clienti che hanno effettuato Ordini il cui costo di spedizione è maggiore di 2. Visualizzare i Clienti in un'unica Colonna con l'alias "CLIENTI".
26. Tutti gli Ordini in cui i Libri sono stati pubblicati dal Publisher con numero di telefono "800-555-1211" ed il Cliente associato all'Ordine non si trova nella region "N" o "W".
27. Tutti i Clienti che hanno acquistato Libri scontati.
28. Tutti i Clienti che non hanno effettuato Ordini.
29. Tutti i Clienti che non hanno effettuato Ordini tra il 4 Aprile 2009 e 5 Aprile 2009.
30. Tutte le città (univoche) dei Clienti che hanno acquistato Libri nella Categoria "COOKING".
31. Tutti i Libri ordinati per la loro data di pubblicazione. mostrando i più recenti per primi. Scrivere questa Query per tutti i modi per cui è possibile effettuare un ordinamento.
32. Tutti i libri ordinati dai Clienti la cui lunghezza (totale) del nome e cognome è maggiore di 10.
33. Tutti i nomi e cognomi dei Clienti, mostrati in un'unica colonna. I nomi dovranno avere la prima lettera in maiuscolo e le restanti in minuscolo, mentre il cognome dovrà essere tutto in maiuscolo. Assegnare un alias al risultato.
34. Tutti i titoli ed il costo di spedizione dei Libri ordinati nell'anno 2009. Per i Libri che hanno avuto un costo di spedizione uguale a 4, sostituirlo con 0. Assegnare un alias dove necessario.
35. Calcolare il prezzo finale di ogni Libro attraverso il suo costo iniziale (cost) e percentuale di sconto (discount). Arrotondare il risultato finale a 2 cifre decimali. Assegnare un alias dove necessario.
36. Tutti gli Ordini in cui la differenza tra la data di spedizione e data dell'ordine è un numero divisibile per 2. Escludere dal risultato finale gli Ordini spediti nella città di "AUSTIN".
37. Calcolare il prezzo finale di ogni Libro usando la percentuale di sconto, andando a sostituire i valori NULL con il costo iniziale. Mostrare nel risultato finale il prezzo iniziale (senza sconto) di ogni Libro ed il prezzo scontato (se disponibile).
38. Tutte le spedizioni subiranno un ritardo di 1 mese. Mostrare quindi tutte le nuove date di spedizione aggiungendo un mese alla data già presente. Se un Ordine ancora non è stato spedito, mostrare la stringa "NON SPEDITO".
39. Tutti gli Ordini effettuati nello stato di "WY" ma non nella città di "CHEYENNE". Se il costo di spedizione non è presente, mostrare il valore "0". Assegnare un alias al risultato.
40. Le informazioni di tutti i Publisher i cui Libri hanno uno sconto superiore del 4%. Oltre al nome e contatto del Publisher, mostrare solamente le prime tre cifre del numero di telefono.
41. Tutti gli Autori che hanno lavorato con il Publisher "AMERICAN PUBLISHING" ed hanno pubblicato Libri nel mese di Dicembre 2005 nella Categoria "COMPUTER". Mostrare nel risultato finale solo l'ultima lettera del nome e la prima lettera del cognome.

# Argomenti
- Basic SQL SELECT Statements
- Restricting Rows and Sorting Data
- Joining Data from Multiple Tables
- Selected Single-Row Functions