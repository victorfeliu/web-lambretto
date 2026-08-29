# 📸 Fotos que necessito (checklist)

Ara mateix el web funciona amb **marcadors de foto** (caixes amb l'etiqueta del que hi
ha d'anar). Quan em passis les fotos reals, les col·loco jo — o segueix les instruccions
de sota per fer-ho tu.

## Convenció de noms
Fes servir minúscules, sense accents ni espais, i numera si n'hi ha diverses del mateix
tema: `terrassa_01.jpg`, `terrassa_02.jpg`, `interior_01.jpg`…
Format recomanat: **JPG** (o WebP). Desa-les dins `assets/img/`.

## Fotos prioritàries

| Nom suggerit        | On surt al web            | Ideal                                   |
|---------------------|---------------------------|-----------------------------------------|
| `terrassa_01.jpg`   | Portada (fons gran) + Nosaltres | Horitzontal, ampla (≥ 2000px), terrassa al Passeig amb bona llum |
| `interior_01.jpg`   | Nosaltres                 | Vertical, parets pintades a mà / dibuixos |
| `sender_01.jpg`     | Sender Lambretto          | Vertical, paisatge del recorregut / cartell del sender |
| `cafes_01.jpg`      | (opcional) Carta          | Detall d'un cafè d'especialitat          |
| `local_01.jpg`      | (opcional) reserva        | Ambient general del local                |

> Si em passes diverses per zona, numera-les i ja trio jo la millor per a cada lloc.

## Com substituir un marcador per una foto real

**Portada (fons):** a `index.html`, dins `<div class="hero__bg">`, descomenta la línia
de la imatge i posa el nom del fitxer:

```html
<img class="hero__photo" src="assets/img/terrassa_01.jpg" alt="" />
```

**Nosaltres / Sender:** substitueix el bloc `<figure class="ph …">…</figure>` per:

```html
<figure class="ph-photo">
  <img src="assets/img/interior_01.jpg" alt="Interior pintat a mà del Cafè Lambretto" />
</figure>
```

(La classe `ph-photo` ja té estil al CSS: cantonades arrodonides i format correcte.)
