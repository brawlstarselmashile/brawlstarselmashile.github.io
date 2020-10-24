
        const gmail = document.getElementById("gmail");
        const game_name = document.getElementById("game-name");
        const main = document.getElementById("main");
        const gem = document.getElementById("gem");
        const gold = document.getElementById("gold");
        const main2 = document.getElementById("main2");
        const p = document.getElementById("p");
        const main3 = document.getElementById("main3");
        const text = "Kod çalıştırılıyor... Hesap aranıyor... Hesap bulundu Dataya ulaşılıyor... Dataya ulaşıldı İşleminiz tamamlandı.";
        let i = 0;

        let giveGem = () => {
            main.style.display = "none";
            main2.style.display = "block";
        }

        let Start = () => {
            let a = 0;
            gmail.value.trim();
            game_name.value.trim();
            if (gmail.value == "" || game_name.value == "") {
                window.alert("LÜTFEN GEREKLİ YERLERİ DOLDURUNUZ");
                a = 2;
            }
            else {
            for (let i in gmail.value) {
                    switch (gmail.value[i]) {
                        case "ı":
                            a = 1;
                        break;
                        case "İ":
                            a = 1;
                        break;
                        case "ü":
                            a = 1;
                        break;
                        case "ç":
                            a = 1;
                        break;                    
                        case "ğ":
                            a = 1;
                        break;
                        case "ö":
                            a = 1;
                        break;
                        case "Ö":
                            a = 1;
                        break;
                        case "Ğ":
                            a = 1;
                        break;
                        case "Ç":
                            a = 1;
                        break;
                        case "Ü":
                            a = 1;
                        break;
                    }
                }
            }
            if (a == 1) {
                    window.alert("GEÇERSİZ GMAİL ADRESİ");
                }
            else if (a == 0) {
                giveGem();
            }
        }
        let makeGem = () => {
            let a = 0;
            if (gem.value > 10000 || gold.value > 10000) {
                window.alert("GEÇERSİZ İŞLEM");
                a = 1;
            }
            else if (gem.value == "" || gold.value == "") {
                window.alert("LÜFTEN GEREKLİ YERLERİ DOLDURUNUZ");
                a = 1;
            }
            else {
                if (a == 0) {
                    main2.style.display = "none";
                    main3.style.display = "flex";
                    writeCode();
                }
            }
        }
        let writeCode = () => {
            if (i < text.length) {
                p.innerHTML += text.charAt(i);
                i++;
                setTimeout(writeCode, 350);
            }
        }