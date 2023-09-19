### Avtentikacija

    - Utvrduvanje na avtenticnost, identitet
    - Proces vo koj verificirame dali nekoj e toj sto tvrdi deka e.
    Primer:
        -Verifikacija na licnost so pokazuvanje licna karta,
        -Najava na fb so email i lozinka

### Avtorizacija

    - Dozvola, privilegija za izvrsuvanje na odredeni funkcii
    - Proces na verificiranje na korisnikot dali ima privilegii da pristapi do odredeni aplikacii, fajlovi, i slicno.
    Primer:
        - Korisnik koj moze da gi vidi svoite beleski na telefonot, a pred toa go vklucil telefonot so pin, pattern, finger id, face id (se avtenticira)

### Multi-tenancy

    tenant - stanar
    multi-tenancy - poveke stanari, kade sto sekoj si gi gleda samo svoite podatoci, drugite ne mozat da mu gi vidat, i toj ne moze na drugite

    - Multi-tenancy(Multi-korisnost) e arhitektura na software koja ovozmozuva poveke nezavisni korisnici ili organizacii da spodeluvaat ista aplikacija ili sistem,
    dodeka gi zadrzuva izolirani podatocite i konfiguraciite. Taa obezbeduva efikasno spodeluvanje na resursi i prilagoduvanje za sekoj korisnik ili organizacija

    Primer:
    - Admin korisnikot ima pristap do poveke privilegii, dodeka obicniot korisnik ima pomalku
    - Admin moze da ve blokira od koristenje na softverot, moze da vi stavi restrikcii za odredeni servisi vo zavisnost od kolku nekoj korisnik platil, kako se
    odnesuval i slicno
    - Korisnik - moze da napravi nov zapis, da go uredi, da go izbrise toj zapis sto go kreiral vo svoe ime, ne vo ime na drug korisnik