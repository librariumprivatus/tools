const books = [
    {
        "authors": "",
        "cover": "tri-tochki-zreniia-na-chelovecheskoe-poznanie-karl-popper-pdf-a20e7587.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Три точки зрения на человеческое познание (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Три точки зрения на человеческое познание (Карл Поппер).pdf"
    },
    {
        "authors": "",
        "cover": "otkrytoe-obshchestvo-i-ego-vragi-tom-1-chary-platona-karl-popper-pdf-2c3bcb16.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Открытое общество и его враги. Том 1 Чары Платона (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Открытое общество и его враги. Том 1 Чары Платона (Карл Поппер).pdf"
    },
    {
        "authors": "",
        "cover": "razum-i-ekzistentsiia-iaspers-karl-ddjvu-pdf-66c509dd.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Разум и экзистенция (Ясперс Карл).ddjvu.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Разум и экзистенция (Ясперс Карл).ddjvu.pdf"
    },
    {
        "authors": "",
        "cover": "obektivnoe-znanie-evoliutsionnyi-podkhod-popper-k-r-pdf-b09cb94a.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Объективное знание. Эволюционный подход (Поппер К.Р.).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Объективное знание. Эволюционный подход (Поппер К.Р.).pdf"
    },
    {
        "authors": "",
        "cover": "yaspers-sobranie-sochineniy-po-psihopatologii-v-dvuh-tomah-tom-1-586039-fb2-epub-f679b338.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Yaspers_Sobranie-sochineniy-po-psihopatologii-V-dvuh-tomah-Tom-1.586039.fb2.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Yaspers_Sobranie-sochineniy-po-psihopatologii-V-dvuh-tomah-Tom-1.586039.fb2.epub"
    },
    {
        "authors": "",
        "cover": "geyzenberg-v-fizika-i-filosofiya-bookscafe-net-epub-00ee779d.jpg",
        "data": "data/books",
        "relative": "002 🚀 Mathimatics T/28 - Quantum T/Heisenberg T/Geyzenberg V.. Fizika i filosofiya - BooksCafe.Net.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Geyzenberg V.. Fizika i filosofiya - BooksCafe.Net.epub"
    },
    {
        "authors": "",
        "cover": "geyzenberg-v-fizika-i-filosofia-chast-i-tseloe-pdf-pdf-516047d5.jpg",
        "data": "data/books",
        "relative": "002 🚀 Mathimatics T/28 - Quantum T/Heisenberg T/Geyzenberg_V_-_Fizika_I_Filosofia_chast_I_Tseloe_pdf.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Geyzenberg_V_-_Fizika_I_Filosofia_chast_I_Tseloe_pdf.pdf"
    },
    {
        "authors": "",
        "cover": "smert-ekspertizy-litres-tom-nikols-fb2-7375b617.jpg",
        "data": "data/books",
        "relative": "024 🥨 Propaganda T/Смерть экспертизы [litres] (Том Николс).fb2",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Смерть экспертизы [litres] (Том Николс).fb2"
    },
    {
        "authors": "",
        "cover": "vsia-zhizn-reshenie-problem-ddjvu-pdf-1eb19116.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Вся жизнь — решение проблем.ddjvu.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Вся жизнь — решение проблем.ddjvu.pdf"
    },
    {
        "authors": "",
        "cover": "a-companion-to-food-in-the-ancient-wo-z-lib-org-pdf-54e94b1e.jpg",
        "data": "data/books",
        "relative": "802 🦖 Ser. Cambridge Companion T/add/A Companion to Food in the Ancient Wo... (z-lib.org).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "A Companion to Food in the Ancient Wo... (z-lib.org).pdf"
    },
    {
        "authors": "",
        "cover": "vse-liudi-filosofy-karl-popper-pdf-a313c39b.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Все люди — философы (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Все люди — философы (Карл Поппер).pdf"
    },
    {
        "authors": "",
        "cover": "wittgenstein-sir-anthony-kenny-pdf-1068db97.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1931 - Kenny Anthony T/Wittgenstein (Sir Anthony Kenny).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Wittgenstein (Sir Anthony Kenny).pdf"
    },
    {
        "authors": "",
        "cover": "otkrytoe-obshchestvo-i-ego-vragi-tom-2-vremia-lzheprorokov-gegel-marks-i-drugie-orakuly-karl-popper-pdf-f125cea7.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Открытое общество и его враги. Том 2 Время лжепророков Гегель, Маркс и другие оракулы (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Открытое общество и его враги. Том 2 Время лжепророков Гегель, Маркс и другие оракулы (Карл Поппер).pdf"
    },
    {
        "authors": "",
        "cover": "heisenberg-physik-und-philosophie-pdf-d5da0b03.jpg",
        "data": "data/books",
        "relative": "002 🚀 Mathimatics T/28 - Quantum T/Heisenberg T/Heisenberg_Physik_und_Philosophie.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Heisenberg_Physik_und_Philosophie.pdf"
    },
    {
        "authors": "",
        "cover": "dekart-r-sochineniia-v-2-kh-tomakh-t-1-filosofskoe-nasledie-t-106-1989-pdf-87369f64.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1596 🕯 Dekart Rene T/Декарт Р. - Сочинения в 2-х томах т.1 (Философское наследие т.106) - 1989.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Декарт Р. - Сочинения в 2-х томах т.1 (Философское наследие т.106) - 1989.pdf"
    },
    {
        "authors": "",
        "cover": "yaspers-filosofskoe-orientirovanie-v-mire-rulit-net-326195-epub-54b31762.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Yaspers_FILOSOFSKOE-ORIENTIROVANIE-V-MIRE_RuLit_Net_326195.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Yaspers_FILOSOFSKOE-ORIENTIROVANIE-V-MIRE_RuLit_Net_326195.epub"
    },
    {
        "authors": "",
        "cover": "yaspers-epub-d6507591.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/yaspers.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "yaspers.epub"
    },
    {
        "authors": "",
        "cover": "tri-tochki-zreniia-na-chelovecheskoe-poznanie-karl-popper-pdf-b4a6e272.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Три точки зрения на человеческое познание (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Три точки зрения на человеческое познание (Карл Поппер).pdf"
    },
    {
        "authors": "",
        "cover": "tri-tochki-zreniia-na-chelovecheskoe-poznanie-karl-popper-epub-5b1fbdf7.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Три точки зрения на человеческое познание (Карл Поппер).epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Три точки зрения на человеческое познание (Карл Поппер).epub"
    },
    {
        "authors": "",
        "cover": "kun-protiv-poppera-borba-za-dushu-nauki-fuller-s-djvu-2084236e.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Кун против Поппера Борьба за душу науки (Фуллер С.).djvu",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Кун против Поппера Борьба за душу науки (Фуллер С.).djvu"
    },
    {
        "authors": "",
        "cover": "exploring-philosophy-pdf-97c07138.jpg",
        "data": "data/books",
        "relative": "1001 - Ignore T/Exploring-philosophy.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Exploring-philosophy.pdf"
    },
    {
        "authors": "",
        "cover": "logika-i-rost-nauchnogo-znaniia-karl-popper-pdf-765e7d20.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Логика и рост научного знания (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Логика и рост научного знания (Карл Поппер).pdf"
    },
    {
        "authors": "",
        "cover": "znanie-i-psikhofizicheskaia-problema-v-zashchitu-vzaimodeistviia-popper-karl-pdf-71793eee.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Знание и психофизическая проблема В защиту взаимодействия (Поппер Карл.).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Знание и психофизическая проблема В защиту взаимодействия (Поппер Карл.).pdf"
    },
    {
        "authors": "",
        "cover": "yaspers-velikie-filosofy-kniga-1-pdf-21042c3d.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/yaspers._velikie_filosofy._kniga_1.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "yaspers._velikie_filosofy._kniga_1.pdf"
    },
    {
        "authors": "",
        "cover": "ia-manipuliruiu-toboi-metody-protivodeistviia-skrytomu-vliianiiu-nikita-iurevich-nepriakhin-epub-d8a95901.jpg",
        "data": "data/books",
        "relative": "024 🥨 Propaganda T/Я манипулирую тобой. Методы противодействия скрытому влиянию (Никита Юрьевич Непряхин).epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Я манипулирую тобой. Методы противодействия скрытому влиянию (Никита Юрьевич Непряхин).epub"
    },
    {
        "authors": "",
        "cover": "yaspers-smyisl-i-naznachenie-istorii-sbornik-rulit-net-240196-epub-ac4f6add.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Yaspers_Smyisl_i_naznachenie_istorii_sbornik__RuLit_Net_240196.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Yaspers_Smyisl_i_naznachenie_istorii_sbornik__RuLit_Net_240196.epub"
    },
    {
        "authors": "",
        "cover": "verner-geyzenberg-shagi-za-gorizont-djvu-217c18f0.jpg",
        "data": "data/books",
        "relative": "002 🚀 Mathimatics T/28 - Quantum T/Heisenberg T/Verner_Geyzenberg__Shagi_Za_Gorizont.djvu",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Verner_Geyzenberg__Shagi_Za_Gorizont.djvu"
    },
    {
        "authors": "",
        "cover": "dekart-r-sochineniia-v-2-kh-tomakh-t-2-filosofskoe-nasledie-t-119-1994-pdf-c06f23e8.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1596 🕯 Dekart Rene T/Декарт Р. - Сочинения в 2-х томах т.2 (Философское наследие т.119) - 1994.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Декарт Р. - Сочинения в 2-х томах т.2 (Философское наследие т.119) - 1994.pdf"
    },
    {
        "authors": "",
        "cover": "storytelling-for-law-by-philip-meyer-z-lib-org-epub-b22a74ba.jpg",
        "data": "data/books",
        "relative": "024 🥨 Propaganda T/Storytelling for Law... by Philip Meyer (z-lib.org).epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Storytelling for Law... by Philip Meyer (z-lib.org).epub"
    },
    {
        "authors": "",
        "cover": "yaspers-smyisl-i-naznachenie-istorii-rulit-net-215543-epub-009a69f3.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Yaspers_Smyisl_i_naznachenie_istorii_RuLit_Net_215543.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Yaspers_Smyisl_i_naznachenie_istorii_RuLit_Net_215543.epub"
    },
    {
        "authors": "",
        "cover": "logika-nauchnogo-issledovaniia-popper-k-ddjvu-pdf-4a4dbe1e.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Логика научного исследования (Поппер К.ddjvu.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Логика научного исследования (Поппер К.ddjvu.pdf"
    },
    {
        "authors": "",
        "cover": "vvedenie-v-filosofiiu-iaspers-karl-pdf-0230325d.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Введение в философию (Ясперс Карл.).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Введение в философию (Ясперс Карл.).pdf"
    },
    {
        "authors": "",
        "cover": "logika-nauchnogo-issledovaniia-popper-k-djvu-532c744b.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Логика научного исследования (Поппер К.).djvu",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Логика научного исследования (Поппер К.).djvu"
    },
    {
        "authors": "",
        "cover": "vse-liudi-filosofy-kak-ia-ponimaiu-filosofiiu-popper-karl-djvu-d34d28e0.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Все люди - философы. Как я понимаю философию (Поппер Карл.).djvu",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Все люди - философы. Как я понимаю философию (Поппер Карл.).djvu"
    },
    {
        "authors": "",
        "cover": "a-companion-to-food-in-the-ancient-wo-z-lib-org-copy-2-pdf-edb97cdb.jpg",
        "data": "data/books",
        "relative": "802 🦖 Ser. Cambridge Companion T/add/A Companion to Food in the Ancient Wo... (z-lib.org) copy-2.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "A Companion to Food in the Ancient Wo... (z-lib.org) copy-2.pdf"
    },
    {
        "authors": "",
        "cover": "yaspers-filosofiya-kniga-tretya-metafizika-rulit-net-326193-epub-ae51f352.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/Yaspers_Filosofiya-Kniga-tretya-Metafizika_RuLit_Net_326193.epub",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Yaspers_Filosofiya-Kniga-tretya-Metafizika_RuLit_Net_326193.epub"
    },
    {
        "authors": "",
        "cover": "an-illustrated-brief-by-sir-anthony-kenny-z-lib-org-pdf-60e1e0b9.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1931 - Kenny Anthony T/An Illustrated Brief... by Sir Anthony Kenny (z-lib.org).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "An Illustrated Brief... by Sir Anthony Kenny (z-lib.org).pdf"
    },
    {
        "authors": "",
        "cover": "a-new-history-of-western-philosophy-volume-2-medieval-philosophy-anthony-kenny-pdf-386c18f9.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1931 - Kenny Anthony T/A New History of Western Philosophy,Volume 2 - Medieval Philosophy (Anthony Kenny).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "A New History of Western Philosophy,Volume 2 - Medieval Philosophy (Anthony Kenny).pdf"
    },
    {
        "authors": "",
        "cover": "iskushenie-sviatogo-kopernika-nenauchnye-korni-nauchnoi-revoliutsii-dmitriev-i-ddjvu-pdf-94c2da73.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/4 🔬 Scientific Philosophy T/Искушение святого Коперника ненаучные корни научной революции (Дмитриев И.ddjvu.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Искушение святого Коперника ненаучные корни научной революции (Дмитриев И.ddjvu.pdf"
    },
    {
        "authors": "",
        "cover": "vsia-zhizn-reshenie-problem-o-poznanii-istorii-i-politike-ch-2-mysli-ob-istorii-i-politike-popper-k-r-djvu-87cda869.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Вся жизнь — решение проблем. О познании, истории и политике. Ч. 2 Мысли об истории и политике (Поппер К.Р.).djvu",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Вся жизнь — решение проблем. О познании, истории и политике. Ч. 2 Мысли об истории и политике (Поппер К.Р.).djvu"
    },
    {
        "authors": "",
        "cover": "iskushenie-sviatogo-kopernika-nenauchnye-korni-nauchnoi-revoliutsii-dmitriev-i-s-djvu-b5064006.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/4 🔬 Scientific Philosophy T/Искушение святого Коперника ненаучные корни научной революции (Дмитриев И.С.).djvu",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Искушение святого Коперника ненаучные корни научной революции (Дмитриев И.С.).djvu"
    },
    {
        "authors": "",
        "cover": "yaspers-velikie-filosofy-kniga-2-pdf-f103cfa0.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1883 - Yaspers Karl T/yaspers._velikie_filosofy._kniga_2.pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "yaspers._velikie_filosofy._kniga_2.pdf"
    },
    {
        "authors": "",
        "cover": "obektivnoe-znanie-evoliutsionnyi-podkhod-karl-popper-pdf-cc7c79d3.jpg",
        "data": "data/books",
        "relative": "001 🪲 Philosophy T/1 🏂 Bright Personalities T/1902 - Popper Karl T/Объективное знание. Эволюционный подход (Карл Поппер).pdf",
        "root": "/Users/andrewlevin/Desktop/97🎿ToolsOfBiblioteka/17🍏🏛🍎Bibloteka T",
        "title": "Объективное знание. Эволюционный подход (Карл Поппер).pdf"
    }
];

export default books
