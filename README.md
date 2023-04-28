# Cvičení: Zobrazování dat

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Filmy

Vytvořte si repozitář ze šablony [cviceni-filmy](https://github.com/Czechitas-podklady-WEB/cviceni-filmy) se stránkou, která zobrazuje seznam filmů. Zatím na stránce vidíme film pouze jeden jako příklad. Vaším cílem bude zobrazovat filmy stažené z API.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/daweb/js2/server-komunikace/cv-zobrazovani-dat/cvlekce%3Efilmy/vysledek.png)

- Spusťte si připravenou stránku, prohlédněte `index.html` a strukturu filmu v seznamu.
- Seznam filmů budeme stahovat z endpointu `https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies`, jak vypadá struktura dat, si můžete ověřit otevřením adresy v prohlížeči.
- Napište JavaScriptový kód, který zajistí stažení pole filmů z API. Zatím jej vypište do konzole.
- Někam si zkopírujte strukturu jednoho filmu z `index.html`. Obsah elementu `.movie-list` smažte, aby zůstal prázdný.
- Upravte kód tak, abyste naplnili element `.movie-list` obsahem staženým z API.

## 2. Filmy dle žánrů

Pokračujte v předchozím cvičení. Úkolem bude umožnit filtrování filmů podle žánrů.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/daweb/js2/server-komunikace/cv-zobrazovani-dat/cvlekce%3Efilmy2/ukazka.gif)

- Zakomentujte pro tuto chvíli kód, který z API stahuje jednotlivé filmy. Vrátíme se k němu později.
- Filmové API umožňuje získat názvy všech dostupných žánrů pomocí endpointu `/movie-api/genres`. Prohlédněte si data, která tento endpoint vrací.
- Pomocí funkce `fetch` naplňte těmito daty prvek `select` podle připraveného vzoru.
- V [dokumentaci](https://apps.kodim.cz/daweb/trening-api/docs/filmove-api#seznam-film%C5%AF-get) k filmovému API si nastudujte, jakým způsobem můžete poslat dotaz na filmy pouze určitého žánru.
- Při odeslání formuláře zobrazte uživateli pouze filmy, které mají vybraný žánr.