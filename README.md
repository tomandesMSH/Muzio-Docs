# 📖 Muzio – dokumentace

Uživatelská a technická dokumentace aplikace [Muzio](https://github.com/tomandesMSH/Muzio) pro žáky a učitele ZUŠ Moravský Krumlov.

**Číst online:** [tomandes.eu/Muzio-Docs](https://tomandes.eu/Muzio-Docs/)

## Co v ní je

- **návod pro žáka a pro učitele:** nahrávání, úkoly, hodnocení, třídy, notifikace
- **XP, hvězdy a odznaky:** jak se počítají
- **návod pro admina:** moderace, uživatelé, úklid nahrávek
- **soukromí a GDPR**
- **pro vývojáře:** architektura, databáze, struktura projektu a design systém

## Úpravy

Je to jedna statická stránka bez build kroku:

| Soubor | Obsah |
| --- | --- |
| `index.html` | celý text dokumentace (sekce s kotvami) |
| `style.css` | vzhled, světlý i tmavý režim |
| `script.js` | zvýraznění aktuální sekce v menu a přepínání světlého/tmavého režimu |

Pro náhled stačí otevřít `index.html` v prohlížeči. Push do `main` se do pár minut objeví na GitHub Pages.

Když přibude nová funkce nebo migrace (`web/supabase/migrations/` v repu Muzio), je potřeba doplnit příslušnou sekci a tabulku v části **Databáze**.

## Licence

[MIT](LICENSE)
