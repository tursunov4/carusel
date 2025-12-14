import {Clinic} from "@/services/Clinic";
import {BaseImage} from "@/services/BaseImage";

export const fakeHospitalsClinics: Clinic[] = [
    {
        id: 15,
        name: "Стоматологическая клиника \"Голивудская улыбка\" в Хуньчуне",
        slug: "stomatologicheskaya-klinika-golivudskaya-ulybka-v-hunchune",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>Стоматологическая клиника \"\"Голивудская улыбка\"\" в Хуньчуне с радостью приветствует как новых, так и постоянных клиентов! В 2024 году мы провели масштабный ремонт и полностью обновили оборудование, чтобы обеспечить еще лучшее обслуживание и комфорт для наших гостей. Теперь мы можем принимать больше пациентов, а каждый день наши специалисты помогают десяткам людей обрести уверенность в своей улыбке. Мы гордимся своей работой и приглашаем вас убедиться в том, что наша команда – настоящие профессионалы!</p>",
        procedures: [
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [
            {
                id: 31,
                image: "/media/hospitals/IMG-20240809-WA0009.jpg",
                is_main: true
            },
            {
                id: 32,
                image: "/media/hospitals/IMG-20240809-WA0008.jpg",
                is_main: false
            },
            {
                id: 33,
                image: "/media/hospitals/IMG-20240809-WA0007.jpg",
                is_main: false
            },
            {
                id: 34,
                image: "/media/hospitals/IMG-20240809-WA0006.jpg",
                is_main: false
            },
            {
                id: 35,
                image: "/media/hospitals/IMG-20240809-WA0004.jpg",
                is_main: false
            },
            {
                id: 36,
                image: "/media/hospitals/IMG-20240809-WA0002.jpg",
                is_main: false
            },
            {
                id: 37,
                image: "/media/hospitals/IMG-20240809-WA0001.jpg",
                is_main: false
            }
        ],
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        main_image: {
            id: 31,
            image: "/media/hospitals/IMG-20240809-WA0009.jpg",
            is_main: true
        },
        video: "/media/hospitals/video/15/VID-20240803-WA0001.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 16,
        name: "Стоматология \"Саньшань Уфу\" Хуеньчунь",
        slug: "stomatologiya-sanshan-ufu-huenchun",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "V9CC+XCH, Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай, 133300",
        location: {
            address: "V9CC+XCH, Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай, 133300",
            lat: 42.87242699999999,
            lng: 130.371123
        },
        description: "<p>Корейская стоматология «Саньшань Уфу» г. Хуньчунь была основана в 1992г. и продолжает свою работу по сей день, уже более 30 лет. Наша стоматология хорошо известна жителем Хуньчуня, так же мы принимаем гостей из России. С момента своего основания клиника пролечила десятки тысяч гостей, и накопила богатый, многолетний клинический опыт. • Единственные в г.Хуньчунь награждены грамотой ДВО РАН • У нас свои предприятия по изготовлению короноки протезов • Только мы заключаем с Вами согласие об оказании услуг; • Большая закупка и реализация имплантов</p>",
        procedures: [
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            },
            {
                id: 18,
                name: "Бюгели на замках"
            },
            {
                id: 19,
                name: "Полностью съемные зубные протезы"
            },
            {
                id: 20,
                name: "Съемные протезы на крючках"
            },
            {
                id: 21,
                name: "Виниры"
            },
            {
                id: 22,
                name: "Лечение зубов и десен"
            },
            {
                id: 23,
                name: "Световые пломбы"
            }
        ],
        gallery: [
            {
                id: 21,
                image: "/media/hospitals/IMG-20250126-WA0010.jpg",
                is_main: false
            },
            {
                id: 22,
                image: "/media/hospitals/IMG-20250126-WA0009.jpg",
                is_main: false
            },
            {
                id: 23,
                image: "/media/hospitals/IMG-20250126-WA0008.jpg",
                is_main: false
            },
            {
                id: 24,
                image: "/media/hospitals/IMG-20250126-WA0007.jpg",
                is_main: false
            },
            {
                id: 25,
                image: "/media/hospitals/IMG-20250126-WA0006.jpg",
                is_main: false
            },
            {
                id: 26,
                image: "/media/hospitals/IMG-20250126-WA0005.jpg",
                is_main: false
            },
            {
                id: 27,
                image: "/media/hospitals/IMG-20250126-WA0004.jpg",
                is_main: false
            },
            {
                id: 28,
                image: "/media/hospitals/IMG-20250126-WA0002.jpg",
                is_main: false
            },
            {
                id: 29,
                image: "/media/hospitals/IMG-20250126-WA0001.jpg",
                is_main: false
            },
            {
                id: 30,
                image: "/media/hospitals/IMG-20250126-WA0000.jpg",
                is_main: true
            }
        ],
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        main_image: {
            id: 30,
            image: "/media/hospitals/IMG-20250126-WA0000.jpg",
            is_main: true
        },
        video: "/media/hospitals/video/16/VID-20250126-WA0011.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 17,
        name: "Клиника \"Лотос\" Хуньчунь",
        slug: "klinika-lotos-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>Наши специалисты медицинского центра «Лотос» заботятся о вашем здоровье. Современное оборудование и опытные врачи обеспечивают полный комплекс медицинских услуг высокого качества. «Лотос» – многопрофильная клиника, объединяющая передовые технологии и успешную практику. В нашем центре работают профессора, доктора медицинских наук и врачи высшей категории. Оснащение клиники включает рентген, УЗИ, КТ, МРТ и лабораторные анализы, что позволяет быстро и точно выявлять заболевания и назначать оптимальное лечение. Мы гордимся доверием пациентов: более 70% из них становятся постоянными клиентами. Это ответственность, ради которой мы постоянно совершенствуемся – внедряем новые технологии, обновляем оборудование, повышаем квалификацию врачей. Клиника предоставляет широкий спектр медицинских услуг – от диагностики и лечения до реабилитации. Врачи различных специализаций (кардиология, неврология, ортопедия, дерматология и др.) разрабатывают индивидуальные планы лечения. Наша миссия – предоставлять пациентам качественную и современную медицинскую помощь. Доверяя нам свое здоровье, вы получаете профессиональный подход и заботу!</p>",
        procedures: [
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 5,
                name: "Комплекс по расслаблению суставов"
            },
            {
                id: 6,
                name: "Коррекция суставов"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [
            {
                id: 11,
                image: "/media/hospitals/IMG-20250126-WA0021.jpg",
                is_main: false
            },
            {
                id: 12,
                image: "/media/hospitals/IMG-20250126-WA0020.jpg",
                is_main: false
            },
            {
                id: 13,
                image: "/media/hospitals/IMG-20250126-WA0019.jpg",
                is_main: false
            },
            {
                id: 14,
                image: "/media/hospitals/IMG-20250126-WA0018.jpg",
                is_main: false
            },
            {
                id: 15,
                image: "/media/hospitals/IMG-20250126-WA0017.jpg",
                is_main: false
            },
            {
                id: 16,
                image: "/media/hospitals/IMG-20250126-WA0016.jpg",
                is_main: false
            },
            {
                id: 17,
                image: "/media/hospitals/IMG-20250126-WA0015.jpg",
                is_main: false
            },
            {
                id: 18,
                image: "/media/hospitals/IMG-20250126-WA0014.jpg",
                is_main: false
            },
            {
                id: 19,
                image: "/media/hospitals/IMG-20250126-WA0013.jpg",
                is_main: false
            },
            {
                id: 20,
                image: "/media/hospitals/IMG-20250126-WA0012.jpg",
                is_main: true
            }
        ],
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        main_image: {
            id: 20,
            image: "/media/hospitals/IMG-20250126-WA0012.jpg",
            is_main: true
        },
        video: "/media/hospitals/video/17/VID-20250126-WA0022.mp4",
        research_categories: [
            {
                id: 1,
                name: "Клиника Лотос в Хуньчуне первый комплекс",
                price: 400,
                researches: [
                    {
                        id: 1,
                        name: "ЭКГ клиника лотос",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 2,
                        name: "Общий анализ крови клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 3,
                        name: "Анализ крови на функцию почек и печени клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 4,
                        name: "Общий анализ мочи клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 5,
                        name: "УЗИ органов пищеварения клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 6,
                        name: "УЗИ щитовидной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 7,
                        name: "УЗИ мочевыделительной чичтемы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 8,
                        name: "УЗИ предстательной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 9,
                        name: "Доплер сосудов головного мозга клиника лотос",
                        price: 350,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 2,
                name: "Клиника Лотос в Хуньчуне Второй льготный комплекс",
                price: 500,
                researches: [
                    {
                        id: 1,
                        name: "ЭКГ клиника лотос",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 2,
                        name: "Общий анализ крови клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 3,
                        name: "Анализ крови на функцию почек и печени клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 4,
                        name: "Общий анализ мочи клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 5,
                        name: "УЗИ органов пищеварения клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 6,
                        name: "УЗИ щитовидной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 7,
                        name: "УЗИ мочевыделительной чичтемы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 8,
                        name: "УЗИ предстательной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 9,
                        name: "Доплер сосудов головного мозга клиника лотос",
                        price: 350,
                        researchCategoryId: 1,
                    },
                    {
                        id: 10,
                        name: "Денситометрия в клинике Лотос",
                        price: 300,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 3,
                name: "Клиника Лотос в Хуньчуне льготный комплекс для женщин",
                price: 500,
                researches: [
                    {
                        id: 6,
                        name: "УЗИ щитовидной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 10,
                        name: "Денситометрия в клинике Лотос",
                        price: 300,
                        researchCategoryId: 1,
                    },
                    {
                        id: 11,
                        name: "Вагиноскоп клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 12,
                        name: "УЗИ малого таза клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 13,
                        name: "Мазок на флору клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 14,
                        name: "УЗИ молочной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 15,
                        name: "Внутренний осмотр влагалища клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 4,
                name: "Клиника Лотос в Хуньчуне льготный комплекс \"у ортопеда\"",
                price: 600,
                researches: [
                    {
                        id: 1,
                        name: "ЭКГ клиника лотос",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 2,
                        name: "Общий анализ крови клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 3,
                        name: "Анализ крови на функцию почек и печени клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 4,
                        name: "Общий анализ мочи клиника лотос",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 6,
                        name: "УЗИ щитовидной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 7,
                        name: "УЗИ мочевыделительной чичтемы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 8,
                        name: "УЗИ предстательной железы клиника лотос",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 10,
                        name: "Денситометрия в клинике Лотос",
                        price: 300,
                        researchCategoryId: 1,
                    },
                    {
                        id: 16,
                        name: "АСЛ-О, ревматоидный фактор, С-реактивный белок, СОЭ",
                        price: 300,
                        researchCategoryId: 1,
                    },
                    {
                        id: 17,
                        name: "Анализ крови на электролиты клиника лотос",
                        price: 150,
                        researchCategoryId: 1,
                    }
                ]
            }
        ],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 18,
        name: "Больница «СИХЭ» Хуньчунь",
        slug: "bolnitsa-sihe-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "Китай, Ji Lin Sheng, Yan Bian Chao Xian Zu Zi Zhi Zhou, Hun Chun Shi, 站前西大街988号 邮政编码: 133300",
        location: {
            address: "Китай, Ji Lin Sheng, Yan Bian Chao Xian Zu Zi Zhi Zhou, Hun Chun Shi, 站前西大街988号 邮政编码: 133300",
            lat: 42.879,
            lng: 130.358446
        },
        description: "<h2>Больница «СИХЭ» в Хуньчуне — современный медицинский центр на стыке традиций и технологий</h2><p><strong>Больница «СИХЭ»</strong>, расположенная в городе Хуньчунь (КНР), представляет собой один из наиболее известных и востребованных медицинских центров в приграничной зоне, ориентированный как на местных, так и на иностранных пациентов. Учреждение получило широкую популярность благодаря высокому уровню сервиса, квалифицированному персоналу, а также выгодному географическому положению — в непосредственной близости к России и Корее. Клиника оказывает широкий спектр услуг в области диагностики, терапии, реабилитации и эстетической медицины, при этом активно используя как современные западные методики, так и элементы традиционной китайской медицины.</p><p>Медицинский центр оснащён по последнему слову техники: в больнице установлены современные аппараты МРТ и КТ, цифровые рентген-системы, ультразвуковая диагностика высокого разрешения, а также оборудование для лабораторных исследований, позволяющее получать точные и быстрые результаты. Особое внимание уделяется безопасности пациентов, поэтому все процедуры проходят в соответствии с международными медицинскими стандартами качества и контроля. Большинство врачей имеют высшие медицинские степени, стажировки за рубежом и свободно владеют русским языком, что делает лечение комфортным для иностранных пациентов.</p><p>Одной из ключевых особенностей больницы «СИХЭ» является тесная интеграция с методами <i>традиционной китайской медицины</i>. Пациенты могут пройти курсы иглорефлексотерапии, фитотерапии, массажей Гуаша, а также восстановительные процедуры после травм или операций. Такой комплексный подход позволяет эффективно лечить хронические заболевания, улучшать общее состояние организма и запускать естественные процессы регенерации. Восточная медицина в клинике не конкурирует с западной, а дополняет её, формируя мощную синергетическую модель лечения.</p><p>Отдельного внимания заслуживает косметологическое и реабилитационное отделения. Здесь проводят процедуры по омоложению, лазерной терапии, восстановлению кожи после повреждений, коррекции фигуры и комплексному детоксу организма. Благодаря наличию современного спа-комплекса, пациенты могут сочетать лечение с релаксацией, что особенно актуально для гостей, приезжающих на длительные курсы восстановления здоровья. Многие пациенты отмечают дружелюбную атмосферу, внимательное отношение и высокий уровень обслуживания на всех этапах пребывания.</p><p>Больница «СИХЭ» в Хуньчуне по праву считается не только медицинским учреждением, но и центром здорового образа жизни. Ежегодно сюда приезжают тысячи пациентов из России, Казахстана, Монголии и других стран. Удобная логистика, прозрачное ценообразование, безвизовый режим для россиян и высокое качество медицинских услуг делают эту клинику одним из лучших выборов для диагностики, лечения и оздоровления в регионе. Это не просто больница — это пространство заботы о человеке, его здоровье и качестве жизни.</p>",
        procedures: [
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 5,
                name: "Комплекс по расслаблению суставов"
            },
            {
                id: 6,
                name: "Коррекция суставов"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [
            {
                id: 1,
                image: "/media/hospitals/f16df30974bb01a6a3365b53fb25fdb9.jpeg",
                is_main: false
            },
            {
                id: 2,
                image: "/media/hospitals/dcfb8d3aa1c25bc27bc539666f37ea84.jpeg",
                is_main: false
            },
            {
                id: 3,
                image: "/media/hospitals/acdbcc060f341e3f0afe5ba3d37cd2dc.jpeg",
                is_main: false
            },
            {
                id: 4,
                image: "/media/hospitals/265415fb8edff6808359d1ca342c28f8.jpeg",
                is_main: false
            },
            {
                id: 5,
                image: "/media/hospitals/49920c02c52ff21e3cf340113ca90015.jpeg",
                is_main: false
            },
            {
                id: 6,
                image: "/media/hospitals/20257a994634119045626ada0f88c347.jpeg",
                is_main: true
            },
            {
                id: 7,
                image: "/media/hospitals/82d17f2e74b786c42413e6cae5940e20.jpeg",
                is_main: false
            },
            {
                id: 8,
                image: "/media/hospitals/055aa5595a8ee1bdac4ec7e4e423bb6f.jpeg",
                is_main: false
            },
            {
                id: 9,
                image: "/media/hospitals/6f148e43449e3be0b39bf46f240ea4d8.jpeg",
                is_main: false
            },
            {
                id: 10,
                image: "/media/hospitals/5ffe4af573aedfa82d85726e558adec4.jpeg",
                is_main: false
            }
        ],
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        main_image: {
            id: 6,
            image: "/media/hospitals/20257a994634119045626ada0f88c347.jpeg",
            is_main: true
        },
        video: "/media/hospitals/videos/18/vid1113.mp4",
        research_categories: [
            {
                id: 9,
                name: "Первый льготный комплекст Больница ЕВРАЗИЯ",
                price: 290,
                researches: [
                    {
                        id: 31,
                        name: "ЭКГ",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 32,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 33,
                        name: "Анализ мочи",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 34,
                        name: "Узи органов пищеварения",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 35,
                        name: "Узи мочевой системы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 36,
                        name: "Узи сонной артерии",
                        price: 100,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 10,
                name: "Второй льготный комплекст Больница ЕВРАЗИЯ",
                price: 390,
                researches: [
                    {
                        id: 31,
                        name: "ЭКГ",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 32,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 33,
                        name: "Анализ мочи",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 34,
                        name: "Узи органов пищеварения",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 35,
                        name: "Узи мочевой системы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 36,
                        name: "Узи сонной артерии",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 37,
                        name: "Узи щитовидной железы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 38,
                        name: "Тепловизор",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 39,
                        name: "Анализ крови на функцию печени и почек",
                        price: 150,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 11,
                name: "Третий льготный комплекст Больница ЕВРАЗИЯ",
                price: 490,
                researches: [
                    {
                        id: 31,
                        name: "ЭКГ",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 32,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 33,
                        name: "Анализ мочи",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 34,
                        name: "Узи органов пищеварения",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 35,
                        name: "Узи мочевой системы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 36,
                        name: "Узи сонной артерии",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 37,
                        name: "Узи щитовидной железы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 38,
                        name: "Тепловизор",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 39,
                        name: "Анализ крови на функцию печени и почек",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 40,
                        name: "Анализ крови АСЛ-О",
                        price: 150,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 12,
                name: "Льготный комплекст для женщин Больница ЕВРАЗИЯ",
                price: 400,
                researches: [
                    {
                        id: 41,
                        name: "Вагиноскоп",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 42,
                        name: "УЗИ малого таза",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 43,
                        name: "Мазок на микрофлору",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 44,
                        name: "УЗИ молочной железы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 45,
                        name: "Внутренний осмотр",
                        price: 100,
                        researchCategoryId: 1,
                    }
                ]
            }
        ],
        reviews: [
            {
                id: 1,
                user: 1,
                rating: 5,
                text: "Все прекрасно",
                visitDate: new Date("2025-13-12"),
                date: new Date("2025-13-12"),
            }
        ],
        equipment: [
            {
                id: 1,
                name: "МРТ Siemens Magnetom",
                image: "/media/equipment/Siemens-Aera-1_450x365_a2a.png"
            },
            {
                id: 2,
                name: "УЗИ GE Voluson E8",
                image: "/media/equipment/voluson_E8-600x315.jpg"
            },
            {
                id: 3,
                name: "КТ Toshiba Aquilion",
                image: "/media/equipment/687kh564-kopiya.png"
            },
            {
                id: 4,
                name: "ЭКГ Philips PageWriter",
                image: "/media/equipment/Philips_PageWriter_TC50.png"
            },
            {
                id: 5,
                name: "Эндоскоп Olympus EVIS",
                image: "/media/equipment/img75623.jpg"
            },
            {
                id: 6,
                name: "Рентген Philips DigitalDiagnost",
                image: "/media/equipment/philips-digitaldiagnost-c50-2.webp"
            },
            {
                id: 7,
                name: "Лазерный аппарат Fotona",
                image: "/media/equipment/4D-Fotona.jpg"
            }
        ],
        deep_procedures: [
            {
                id: 1,
                name: "Фракционное омоложение CO2-лазером",
                slug: "fraktsionnoe-omolozhenie-co2-lazerom",
                image: "/media/deep_procedures/images.jpeg",
                description: "<h3>Что такое фракционное омоложение?</h3><p>Фракционное омоложение с использованием CO2-лазера — это один из самых эффективных методов борьбы с возрастными изменениями кожи, постакне и шрамами. Метод основан на воздействии лазера, который создает микроповреждения в коже, запуская процессы её восстановления. Благодаря контролируемому повреждению стимулируется выработка коллагена, кожа становится упругой, подтянутой и ровной.</p><h3>Показания к процедуре</h3><p>Процедура рекомендуется при выраженных морщинах, снижении тонуса кожи, рубцах после акне, гиперпигментации. Также её применяют для уменьшения пор и устранения сосудистой сетки. Подходит как для лица, так и для других участков тела, таких как шея, декольте и кисти рук.</p><h3>Период восстановления</h3><p>После сеанса может наблюдаться покраснение, отечность, шелушение кожи. Восстановление занимает от 5 до 10 дней. Эффект нарастает в течение нескольких недель и сохраняется до 12 месяцев. Рекомендуется курс из 2–3 процедур с интервалом 1–2 месяца.</p>"
            },
            {
                id: 2,
                name: "SMAS-лифтинг ультразвуком (HIFU)",
                slug: "smas-lifting-ultrazvukom-hifu",
                image: "/media/deep_procedures/2a3496a32f09a018639b63002668a1cd.jpg",
                description: "<h3>Уникальность метода</h3><p>SMAS-лифтинг (HIFU — High-Intensity Focused Ultrasound) — это безоперационная подтяжка глубоких тканей лица и шеи с помощью ультразвука. В отличие от поверхностных процедур, ультразвук проникает в глубокие слои, включая мышечно-апоневротическую систему (SMAS), обеспечивая мощный эффект лифтинга без разрезов и уколов.</p><h3>Преимущества HIFU</h3><p>Процедура безболезненна, не требует анестезии и не оставляет следов на коже. Уже после первого сеанса заметно подтягивается овал лица, сокращаются морщины, улучшается структура кожи. HIFU может использоваться в качестве альтернативы пластической хирургии для пациентов, не готовых к радикальным мерам.</p><h3>Как проходит процедура</h3><p>Сеанс длится около 60–90 минут. Ощущения во время процедуры могут напоминать лёгкие покалывания или тепло. Реабилитация не требуется, и пациент может сразу вернуться к привычной жизни. Эффект сохраняется до 18 месяцев.</p>"
            },
            {
                id: 3,
                name: "Инъекционная биоревитализация гиалуроновой кислотой",
                slug: "inektsionnaya-biorevitalizatsiya-gialuronovoy-kislotoy",
                image: "/media/deep_procedures/yoaclwmx4zx7srbh0ten92bjmyerhygh.jpg",
                description: "<h3>Суть процедуры</h3><p>Биоревитализация — это инъекционное введение гиалуроновой кислоты в кожу для интенсивного увлажнения, восстановления тонуса и устранения мелких морщин. Гиалуроновая кислота притягивает и удерживает влагу, стимулирует синтез коллагена и улучшает микроциркуляцию.</p><h3>Эффекты и результаты</h3><p>После процедуры кожа становится более упругой, эластичной, здоровой на вид. Биоревитализация эффективно борется с тусклостью, сухостью кожи, ранними признаками старения, а также используется в профилактике возрастных изменений у пациентов от 25 лет.</p><h3>Период восстановления</h3><p>Инъекции могут вызывать легкие синяки и отечность, которые проходят через 2–3 дня. Рекомендуется избегать солнечного облучения и посещения сауны в течение недели. Курс — 3–5 процедур с интервалом 2–3 недели.</p>"
            },
            {
                id: 4,
                name: "Плазмолифтинг кожи лица",
                slug: "plazmolifting-kozhi-litsa",
                image: "/media/deep_procedures/ladmw9kpngfvz1ewupc34w2rwjiq0ldf.jpeg",
                description: "<h3>Как работает плазмолифтинг?</h3><p>Плазмолифтинг (PRP — Platelet Rich Plasma) основан на введении в кожу пациента его собственной плазмы, обогащённой тромбоцитами. Кровь берётся из вены, центрифугируется, и затем полученная плазма вводится в проблемные зоны лица.</p><h3>Природное омоложение</h3><p>Плазма активизирует регенерацию клеток, стимулирует выработку коллагена и улучшает тонус кожи. Метод полностью безопасен, так как используется собственный биоматериал пациента, что исключает риск аллергии и отторжения.</p><h3>Показания</h3><p>Плазмолифтинг показан при тусклой коже, мелких морщинах, акне, рубцах, сухости. Может использоваться как самостоятельная процедура или в комплексе с другими методами омоложения.</p>"
            },
            {
                id: 5,
                name: "Микротоковая терапия лица",
                slug: "mikrotokovaya-terapiya-litsa",
                image: "/media/deep_procedures/microcurrent-medicine-treatment-portrait-of-beaut-2023-05-26-00-59-49-ut_L0xUsqr.jpg",
                description: "<h3>Нежное, но мощное воздействие</h3><p>Микротоковая терапия — это физиотерапевтический метод, основанный на воздействии слабых импульсных токов на кожу и подлежащие мышцы. Процедура направлена на улучшение кровообращения, лимфодренаж, восстановление клеточного метаболизма и тонизирование мышц лица.</p><h3>Показания и эффекты</h3><p>Рекомендуется при первых признаках старения, отечности, снижении тонуса кожи, «уставшем» лице. Уже после нескольких процедур пациенты отмечают улучшение овала лица, свежий и отдохнувший вид кожи. Курс состоит из 8–10 сеансов 2–3 раза в неделю.</p><h3>Преимущества</h3><p>Метод абсолютно безболезненный и не требует восстановительного периода. Подходит для чувствительной кожи и может использоваться в любом возрасте в рамках anti-age терапии или профилактики.</p>"
            },
            {
                id: 6,
                name: "RF-лифтинг (радиоволновой лифтинг)",
                slug: "rf-lifting-radiovolnovoy-lifting",
                image: "/media/deep_procedures/rf__1_.jpg",
                description: "<h3>Принцип действия</h3><p>RF-лифтинг — это процедура омоложения кожи с помощью радиочастотной энергии. Воздействие радиоволн на дерму вызывает контролируемый нагрев тканей, что стимулирует выработку собственного коллагена и эластина. Это приводит к подтяжке кожи, улучшению её тонуса и текстуры.</p><h3>Преимущества</h3><p>Процедура безопасна, безболезненна, не требует анестезии и восстановительного периода. Эффект лифтинга нарастает постепенно в течение 2–3 недель и сохраняется до 6–8 месяцев. RF-терапия может применяться на лице, шее, зоне декольте, а также на теле (живот, бедра, руки).</p><h3>Показания</h3><p>Рекомендована при потере упругости кожи, дряблости, выраженных морщинах, отёках. Может проводиться в любом возрасте в рамках anti-age программ.</p>"
            },
            {
                id: 7,
                name: "Карбокситерапия лица",
                slug: "karboksiterapiya-litsa",
                image: "/media/deep_procedures/full_K9I1PHhh.jpg",
                description: "<h3>Что это за метод?</h3><p>Карбокситерапия — это процедура омоложения, основанная на введении под кожу медицинского углекислого газа (CO₂). Газ расширяет сосуды, усиливает микроциркуляцию, насыщает ткани кислородом, активирует обмен веществ и выработку коллагена.</p><h3>Результаты</h3><p>После курса процедур кожа становится более сияющей, гладкой и подтянутой. Исчезают тёмные круги под глазами, улучшается цвет лица, уменьшается отёчность и мелкие морщины. Метод широко используется для лечения постакне, сосудистой сетки, рубцов.</p><h3>Процедура и курс</h3><p>Сеанс длится 20–30 минут, возможны лёгкие покалывания или ощущение давления. Для стойкого результата рекомендуется курс из 6–10 процедур с интервалом в 1 неделю.</p>"
            },
            {
                id: 8,
                name: "Химический пилинг TCA",
                slug: "himicheskiy-piling-tca",
                image: "/media/deep_procedures/e2e02319a0df9e17d6c0dc353742336f_1.jpeg",
                description: "<h3>Описание процедуры</h3><p>Химический пилинг TCA (трихлоруксусной кислотой) — это контролируемое удаление поверхностных и срединных слоев кожи, что запускает процессы обновления клеток и выработки коллагена. Процедура позволяет бороться с пигментацией, морщинами, шрамами и неровностями.</p><h3>Как проходит сеанс?</h3><p>На очищенную кожу наносится раствор кислоты, вызывающий временное жжение. Затем наносится нейтрализатор и заживляющая маска. В течение нескольких дней кожа шелушится и обновляется. Полное восстановление занимает 7–10 дней.</p><h3>Преимущества</h3><p>Результатом становится более ровный и сияющий цвет лица, уменьшение глубины морщин и рубцов. Подходит для кожи с признаками фотостарения, постакне и возрастными изменениями.</p>"
            }
        ]
    },
    {
        id: 1,
        name: "Городская народная больница \"Хуньчунь\"",
        slug: "gorodskaya-narodnaya-bolnitsa-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "珲春市森林山大路2618号",
        location: {
            address: "Sen Lin Shan Da Lu, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай",
            lat: 42.87854,
            lng: 130.37134
        },
        description: "<p>Городская народная больница Хуньчунь была основана в 1945 году. Под руководством городского комитета Хуньчуня, городского правительства и управления здравоохранением. Больница занимает площадь 33 440 квадратных метров, общая площадь зданий составляет 57 020 квадратных метров, она несёт ответственность за здоровье и безопасность почти 300 000 жителей города. На сегодняшний день в больнице работают 39 клинических отделений, 621 койка, из которых 334 коек используются для стационарного лечения. В больнице трудятся 694 сотрудника, в том числе 138 сотрудников с званиями не ниже заместителя старшего специалиста, а также 20 кандидатов и магистров наук. Ежегодный объём амбулаторных пациентов превышает 380 000 человек, госпитализируется 12 000 пациентов, проводится более 5000 операций. В больнице работают 8 ключевых клинических отделений, сформировавших комплексную систему медицинского обслуживания с акцентом на развитии специализированных дисциплин и дополнительных методов лечения, особенно в области сердечно-сосудистых вмешательств, лапароскопических операций и ортопедии. Кроме того, больница оснащена более чем 200 современными диагностическими устройствами, включая две системы МРТ 1.5 Т, 64-срезовый КТ, новейшую систему DSA от Philips, что способствует повышению уровня медицинского обслуживания. Центр лечения грудной боли был основан 14 ноября 2017 года. Открытие отделения CCU знаменует начало эры специализированной интенсивной терапии в Городской народной больнице Хуньчуня. Центр проводит такие исследования, как динамическая электрокардиография, динамическое измерение артериального давления, тест на велоэргометре, трансэзофагеальную эхокардиографию. Здесь работает квалифицированная команда врачей, способная самостоятельно проводить кардиологические интервенции, имплантацию кардиостимуляторов, радиочастотную абляцию и другие процедуры. Ежегодно выполняется более 700 операций. 1 ноября 2019 года центр был официально сертифицирован как Китайский центр лечения грудной боли (базовый уровень). Центр лечения инсульта был открыт 26 июня 2018 года. Сейчас центр располагает полноценной командой по нейроинтервенции и способен проводить скрининг, профилактику и экстренную помощь при инсультах на территории региона. В 2019 году центр был выбран в качестве \"\"Определённой больницы для карты экстренной помощи при инсультах в провинции Цзилинь, район Яньбянь\"\". В 2019 году также были основаны \"\"Центр лечения травм\"\", \"\"Центр спасения беременных женщин и новорождённых с критическими состояниями\"\" и \"\"Центр спасения критически больных детей и новорождённых\"\". На сегодняшний день больница постепенно формирует систему мультидисциплинарного лечения, что существенно уменьшает необходимость перевозки пациентов и имеет важное значение для лечения критически больных и пациентов с серьёзными травмами. За последние несколько лет больница получила множество наград. В 2018 году Центр лечения инсульта был признан Национальным образцовым центром по профилактике инсультов Государственной комиссией здравоохранения, в 2019 году - как передовая группа в системе здравоохранения района Яньбянь, заняла первое место в оценке медицинских учреждений Яньбянь, получила \"\"Приз победителя\"\" на национальном семинаре Китайского союза здоровья сердца и сосудов, была награждена как лучшая волонтёрская организация провинции Цзилинь, в 2019 году получила бронзовую награду и приз зрительских симпатий на Всекитайском конкурсе больниц (категория \"\"городские больницы\"\"), в 2020 году - приз зрительских симпатий и приз за ценность случая.</p>",
        procedures: [
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 5,
                name: "Комплекс по расслаблению суставов"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/1/VID-20231227-WA0011.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 2,
        name: "Больница «ZhongYi” Янцзы, Yanji ZhongYi",
        slug: "bolnitsa-zhongyi-yantszy-yanji-zhongyi",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "延边延吉市",
        location: {
            address: "Яньцзи, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8910699,
            lng: 129.5091
        },
        description: "<p>&nbsp;</p>",
        procedures: [
            {
                id: 24,
                name: "Аппаратное лечение \"Капсула\""
            },
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 5,
                name: "Комплекс по расслаблению суставов"
            },
            {
                id: 6,
                name: "Коррекция суставов"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/2/20231201134636916.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 3,
        name: "Стоматология «Дентал» Хуньчунь, Hunchun dental",
        slug: "stomatologiya-dental-hunchun-hunchun-dental",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "珲春市德军口腔",
        location: {
            address: "Китай, Ji Lin Sheng, Yan Bian Chao Xian Zu Zi Zhi Zhou, Hun Chun Shi, 沿河街833 邮政编码: 133300",
            lat: 42.868537,
            lng: 130.366039
        },
        description: "<p>&nbsp;</p>",
        procedures: [
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/3/VID-20231227-WA0000.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 4,
        name: "Стоматология «Дентал М» Хуньчунь, Hunchun weixiao",
        slug: "stomatologiya-dental-m-hunchun-hunchun-weixiao",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "珲春市微笑口腔",
        location: {
            address: "V9G9+956, Hun Chun Xi Jie, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай, 133300",
            lat: 42.875909,
            lng: 130.36788
        },
        description: "<p>Добро пожаловать в стоматологическую клинику \"\"Дентал М\"\" в Хуньчуне – вашем источнике премиум стоматологических услуг. Мы гордимся своим статусом одной из самых востребованных стоматологий в городе, предлагая полный спектр профессиональных услуг – от лечения кариеса с использованием современных методов до передовой имплантации зубов. Наш опытный медицинский персонал и передовое оборудование гарантируют вам высококачественное обслуживание и безупречный результат. В \"\"Дентал М\"\" ваша улыбка находится в надежных руках.</p>",
        procedures: [
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/4/VID-20231227-WA0001.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 5,
        name: "Стоматология «Слава» Хуньчунь, Hunchun mingren",
        slug: "stomatologiya-slava-hunchun-hunchun-mingren",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "珲春市铭仁口腔 （万豪酒店那边儿）",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>Стоматологическая клиника \"\"Слава\"\" - пионер в Хуньчуне, принимающая русских туристов уже более 16 лет. За это время клиника завоевала безупречную репутацию, не имея ни единого негативного отзыва. Иностранных клиентов лично принимает главный врач, гарантируя максимальную профессиональность в предоставляемых услугах. С клиникой \"\"Слава\"\" вас ждет современное оборудование и высококвалифицированный врач с обширным опытом. Здесь ставится залогом качественного лечения сочетание новейших технологий и профессионального медицинского опыта. В \"\"Слава\"\" заботятся о вашем улыбающемся здоровье с неизменным стремлением к безупречности в обслуживании.</p>",
        procedures: [
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/5/VID-20231227-WA0002.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 6,
        name: "Больница \"Дальний Восток\" Хуньчунь",
        slug: "bolnitsa-dalniy-vostok-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "珲春市远东医院",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>Больница \"\"Дальний Восток\"\" является столпом заботы о здоровье горожан, прославившись своим уникальным подходом к лечению опорно-двигательного аппарата и заболеваний суставов. Несмотря на свои скромные размеры, она занимает важное место в медицинской сфере и является одним из пионеров в этом городе. Больница обладает богатым опытом работы, который накоплен годами посвященной практики. Команда опытных врачей обеспечивает высококачественное лечение пациентов, используя методы китайской медецины. Основные отличительные черты нашй больницы включают в себя персонализированный подход к лечению, внимание к деталям и дружелюбную атмосферу, что делает ее одним из предпочтительных медицинских учреждений в этом регионе.</p>",
        procedures: [
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: null,
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 7,
        name: "Санаторий «ХУАЖУЙ»  Хуньчунь, Hunchun",
        slug: "sanatoriy-huazhuy-hunchun-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "珲春市",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>Санаторий «ХУАЖУЙ» расположен в северном районе пригорода Хуньчуня у подножья горы рядом с буддийским храмом Линбао. Общая площадь территории более 13 тысяч квадратных метров включая 3 основых здания санатория -трехэтажный корпус А, два Четырехэтажных корпуса В и С, а также прилегающую вокруг живописную территорию. Государственный санаторий «ХуаЖуй» Находится в непосредственной близости к хвойному парку Лунцоаньшань,что открывает дополнительные приятные бонусы в виде чистого воздуха и прекрасного вида на хвойный лес. В санатори проходят лечение не только пациенты из России, но и жители Китая, в том числе из отдаленных от Хуньчуня регионов. ведь именно в нашем санатории работа ют высококвали фицированные врачи и лучшие специалисты, которые круглые сутки заботятся о Вашем Здоровье!</p>",
        procedures: [
            {
                id: 24,
                name: "Аппаратное лечение \"Капсула\""
            },
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/7/VID-20231121-WA0007.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 8,
        name: "Больница \"Евразия\"  Хуньчунь, Hunchun OuYa",
        slug: "bolnitsa-evraziya-hunchun-hunchun-ouya",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "珲春市欧亚医院",
        location: {
            address: "V9G8+45M, Hun Chun Xi Jie, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай, 133300",
            lat: 42.875348,
            lng: 130.365433
        },
        description: "<p>Больница \"\"Евразия\"\" в Хуньчуне – впечатляющее медицинское учреждение, являющееся одной из крупнейших в городе. Специализируясь на полном спектре медицинских услуг, она предоставляет высококачественное обследование и лечение в различных областях здравоохранения. Сердечно-сосудистые заболевания, заболевания опорно-двигательной системы, проблемы с органами пищеварения – все эти аспекты заботы о здоровье входят в компетенцию \"\"Евразии\"\". Однако, что делает эту больницу уникальной в Хуньчуне, так это наличие отделения по пластической хирургии. Здесь проводятся операции, направленные на восстановление и улучшение внешнего вида, придавая пациентам уверенность и радость. Кроме того, \"\"Евразия\"\" превосходит в предоставлении интегрированных медицинских услуг. Отделение стоматологии обеспечивает комплексное лечение заболеваний полости рта, гарантируя заботу о зубах и улучшение устной гигиенической среды. Для удобства пациентов, имеющих трудности с передвижением, на 5-м этаже \"\"Евразии\"\" оборудован санаторий. Это уникальное пространство предоставляет возможность не только лечиться, но и проживать в комфортных условиях, что особенно важно для тех, кто нуждается в продолжительном стационарном лечении. Кроме того, \"\"Евразия\"\" активно практикует применение китайской медицины, предоставляя пациентам возможность воспользоваться традиционными методами лечения в дополнение к современным медицинским подходам.</p>",
        procedures: [
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 5,
                name: "Комплекс по расслаблению суставов"
            },
            {
                id: 6,
                name: "Коррекция суставов"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: null,
        research_categories: [
            {
                id: 9,
                name: "Первый льготный комплекст Больница ЕВРАЗИЯ",
                price: 290,
                researches: [
                    {
                        id: 31,
                        name: "ЭКГ",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 32,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 33,
                        name: "Анализ мочи",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 34,
                        name: "Узи органов пищеварения",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 35,
                        name: "Узи мочевой системы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 36,
                        name: "Узи сонной артерии",
                        price: 100,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 10,
                name: "Второй льготный комплекст Больница ЕВРАЗИЯ",
                price: 390,
                researches: [
                    {
                        id: 31,
                        name: "ЭКГ",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 32,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 33,
                        name: "Анализ мочи",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 34,
                        name: "Узи органов пищеварения",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 35,
                        name: "Узи мочевой системы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 36,
                        name: "Узи сонной артерии",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 37,
                        name: "Узи щитовидной железы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 38,
                        name: "Тепловизор",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 39,
                        name: "Анализ крови на функцию печени и почек",
                        price: 150,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 11,
                name: "Третий льготный комплекст Больница ЕВРАЗИЯ",
                price: 490,
                researches: [
                    {
                        id: 31,
                        name: "ЭКГ",
                        price: 60,
                        researchCategoryId: 1,
                    },
                    {
                        id: 32,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 33,
                        name: "Анализ мочи",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 34,
                        name: "Узи органов пищеварения",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 35,
                        name: "Узи мочевой системы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 36,
                        name: "Узи сонной артерии",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 37,
                        name: "Узи щитовидной железы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 38,
                        name: "Тепловизор",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 39,
                        name: "Анализ крови на функцию печени и почек",
                        price: 150,
                        researchCategoryId: 1,
                    },
                    {
                        id: 40,
                        name: "Анализ крови АСЛ-О",
                        price: 150,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 12,
                name: "Льготный комплекст для женщин Больница ЕВРАЗИЯ",
                price: 400,
                researches: [
                    {
                        id: 41,
                        name: "Вагиноскоп",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 42,
                        name: "УЗИ малого таза",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 43,
                        name: "Мазок на микрофлору",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 44,
                        name: "УЗИ молочной железы",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 45,
                        name: "Внутренний осмотр",
                        price: 100,
                        researchCategoryId: 1,
                    }
                ]
            }
        ],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 9,
        name: "Стоматологическая клиника \"София\" Хуньчунь, Hunchun meimeiao",
        slug: "stomatologicheskaya-klinika-sofiya-hunchun-hunchun-meimeiao",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "珲春市世纪广场对面",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>&nbsp;</p>",
        procedures: [
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: null,
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 10,
        name: "Стоматологическая клиника \"БоЯ\" Хуньчунь, Hunchun BoYa",
        slug: "stomatologicheskaya-klinika-boya-hunchun-hunchun-boya",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "珲春市博雅口腔",
        location: {
            address: "V9G9+4VH, Jing Bian Lu, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай, 133300",
            lat: 42.87530599999999,
            lng: 130.36972
        },
        description: "<p>Cтоматологии БоЯ открылась в 2010 году. Команда специалистов-стоматологов всех направлений, сформировала новое видение в части подхода к организации лечения пациентов. Четко следуя утвержденным протоколам лечения, наши специалисты оптимизируют лечение&nbsp;пациентов применяя современные цифровые (компьютерные) методики. Стоматология Боя – это в первую очередь профессиональная&nbsp; команда врачей и организация с высочайшим уровнем сервиса и индивидуальным подходом к каждому пациенту.&nbsp; Так же, более 10 000 гостей из 4-х стран мира успешно прошли лечение в наших филиалах и наслаждаются своими красивыми улыбками. За последние несколько лет мы достигли&nbsp;высочайшего уровня удовлетворенности наших пациентов. Именно это является ключевой целью всех сотрудников компании и даёт&nbsp;нам стимул для развития.</p>",
        procedures: [
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/10/VID-20231121-WA0049.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 11,
        name: "Больница \"Пекин Тунженьтан\" Хуньчунь",
        slug: "bolnitsa-pekin-tunzhentan-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "珲春市世纪公馆同仁堂",
        location: {
            address: "V9GC+X22, Hun Chun Xi Jie, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай, 133300",
            lat: 42.877388,
            lng: 130.370005
        },
        description: "<p>Больница \"\"Пекин Тунженьтан\"\" в Хуньчуне, Китай специализируется на традиционной китайской медицине. Она предлагает широкий спектр методов лечения, включая иглоукалывание, акупунктуру, баночный массаж, огневую терапию, инъекции в акупунктурные точки и терапию с использованием игланожа – уникального метода, сочетающего свойства иглоукалывания и хирургического вмешательства. Основные направления лечения в больнице включают заболевания шейного и поясничного отделов позвоночника, такие как грыжи межпозвоночных дисков, а также различные формы артрита (локтевого, запястного, коленного и голеностопного суставов), периартрит плечевого сустава, воспаление сухожилий, ишиас, деформацию коленного сустава, повреждение мениска, а также болезни, связанные с шпорами на пятке и мозолями. Также больница специализируется на лечении неврологических и психологических расстройств, таких как бессонница, последствия инсульта, болезнь Бехтерева, хроническая головная боль и регуляция нервной системы. Кроме того, здесь лечат кожные заболевания, включая кератоакантому и опоясывающий лишай, а также предлагают лечение гинекологических, урологических и кардиологических проблем, включая болезненные менструации, бели, климактерический синдром, мужские сексуальные расстройства, сердечно-сосудистые заболевания, гипертонию и гипотонию, а также различные внутренние болезни. Особое внимание в больнице уделяется индивидуальному подходу к каждому пациенту, с использованием глубоких знаний и опыта в области традиционной китайской медицины.</p>",
        procedures: [
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/11/26.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 12,
        name: "Стоматологическая клиника «Сона плюс» Хуньчунь, Huaqiao Hunchun",
        slug: "stomatologicheskaya-klinika-sona-plyus-hunchun-huaqiao-hunchun",
        category: {
            id: 2,
            name: "Стоматология",
            color: "#ff6a00"
        },
        rating: 0,
        address: "珲春市华侨口腔",
        location: {
            address: "Китай, Yan Bian Chao Xian Zu Zi Zhi Zhou, Hun Chun Shi, CN 吉林省 延边朝鲜族自治州 珲春市 110 米 邮政编码: 133399",
            lat: 42.87434,
            lng: 130.38048
        },
        description: "<p>1</p>",
        procedures: [
            {
                id: 12,
                name: "Коронки из циркония"
            },
            {
                id: 15,
                name: "Металлокерамические коронки"
            },
            {
                id: 11,
                name: "Имплантация зубов + циркониевая коронка"
            },
            {
                id: 13,
                name: "Лечение зубов"
            },
            {
                id: 14,
                name: "Металлические коронки"
            },
            {
                id: 16,
                name: "Удаление зубов"
            },
            {
                id: 17,
                name: "Штифт"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/12/20240121215735261.mp4",
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 13,
        name: "Больница у Риты, Хуньчунь",
        slug: "bolnitsa-u-rity-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "Yu Lin Jie, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай",
        location: {
            address: "Yu Lin Jie, Hun Chun Shi, Yan Bian Chao Xian Zu Zi Zhi Zhou, Ji Lin Sheng, Китай",
            lat: 42.88904,
            lng: 130.38099
        },
        description: "<p>Добро пожаловать в больницу \"Рита\" — ваш надежный центр здоровья в Хуньчуне, Китай. С гордостью являясь одним из пионеров в области медицинских услуг для российских друзей, наша больница сочетает в себе инновационные лечебные методы и теплый, заботливый подход. Наша история началась с открытия аптеки нашим директором, опытным фармацевтом, которая быстро стала известна среди российских туристов благодаря своей знаменитой 10-минутной диагностике по пульсу и крови. Сегодня <strong>Больница у Риты</strong> представляет собой высокотехнологичное медицинское учреждение, где каждый пациент получает квалифицированную помощь от лучших врачей и специалистов. Мы гарантируем, что языковой барьер не станет препятствием к вашему лечению благодаря нашей команде профессиональных переводчиков, которые обеспечат четкое и понятное общение между вами и вашим лечащим врачом.</p><p>&nbsp;</p><p>Наши Отделения и Услуги:</p><ul><li><strong>Гинекологическое отделение:</strong> Современные подходы к женскому здоровью и благополучию.</li><li><strong>Ортопедическое отделение:</strong> Инновационные методы лечения и реабилитации опорно-двигательного аппарата.</li><li><strong>Пластическая хирургия:</strong> Коррекция внешности с использованием последних достижений в области эстетической медицины.</li><li><strong>Традиционная китайская медицина (ТКМ):</strong> Гармонизация тела и духа с помощью проверенных временем методик.</li><li>Озонотерапия: Восстановление и омоложение организма на клеточном уровне.</li><li>Уколы с травами: Использование натуральных экстрактов для лечения и профилактики заболеваний.</li><li>Иглонож: Уникальная методика, сочетающая принципы активации энергетических точек тела.</li><li>Иглоукалывание: Древняя техника стимуляции биологически активных точек на теле.</li><li>Мануальная терапия: Лечение заболеваний опорно-двигательного аппарата через физическое воздействие.</li></ul><p>&nbsp;</p><p>В Больнице у Риты мы стремимся предоставить вам лучший уход и поддержку, необходимые для вашего скорейшего выздоровления. Наша команда профессионалов всегда рядом, чтобы помочь вам на каждом этапе вашего лечения. Добро пожаловать в больницу, где забота о пациенте стоит на первом месте.</p>",
        procedures: [
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            },
            {
                id: 1,
                name: "Банки"
            },
            {
                id: 2,
                name: "Иглонож"
            },
            {
                id: 8,
                name: "Макса-терапия"
            },
            {
                id: 4,
                name: "Капельницы с озоном"
            },
            {
                id: 7,
                name: "Лечение электричеством"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: "/media/hospitals/video/13/%25D0%2591%25D0%25BE%25D0%25BB%25D1%258C%25D0%25BD%25D0%25B8%25D1%2586%25D0%25B0%2520%25D0%25A0%25D0%25B8%25D1%2582%25D0%25B0%2520%25D0%25B2%2520%25D0%25A5%25D1%2583%25D0%25BD%25D1%258C%25D1%2587%25D1%2583%25D0%25BD%25D0%25B5.mp4",
        research_categories: [
            {
                id: 5,
                name: "Первый льготный комплекс у РИТЫ",
                price: 300,
                researches: [
                    {
                        id: 18,
                        name: "ЭКГ",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 19,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 20,
                        name: "Анализ крови на функцию печени и почек",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 21,
                        name: "Общий анализ мочи",
                        price: 10,
                        researchCategoryId: 1,
                    },
                    {
                        id: 22,
                        name: "УЗИ органов пищеварения (печень, желчный пузырь, поджелудочная)",
                        price: 120,
                        researchCategoryId: 1,
                    },
                    {
                        id: 23,
                        name: "УЗИ мочевыделительной системы (почки, мочевой пузырь)",
                        price: 120,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 6,
                name: "Второй льготный комплекс у РИТЫ",
                price: 400,
                researches: [
                    {
                        id: 18,
                        name: "ЭКГ",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 19,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 24,
                        name: "Доплер сосудов головного мозга",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 20,
                        name: "Анализ крови на функцию печени и почек",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 21,
                        name: "Общий анализ мочи",
                        price: 10,
                        researchCategoryId: 1,
                    },
                    {
                        id: 22,
                        name: "УЗИ органов пищеварения (печень, желчный пузырь, поджелудочная)",
                        price: 120,
                        researchCategoryId: 1,
                    },
                    {
                        id: 23,
                        name: "УЗИ мочевыделительной системы (почки, мочевой пузырь)",
                        price: 120,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 7,
                name: "Третий льготный комплекс у РИТЫ",
                price: 500,
                researches: [
                    {
                        id: 18,
                        name: "ЭКГ",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 19,
                        name: "Общий анализ крови, сахара, холестерин",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 24,
                        name: "Доплер сосудов головного мозга",
                        price: 100,
                        researchCategoryId: 1,
                    },
                    {
                        id: 20,
                        name: "Анализ крови на функцию печени и почек",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 21,
                        name: "Общий анализ мочи",
                        price: 10,
                        researchCategoryId: 1,
                    },
                    {
                        id: 22,
                        name: "УЗИ органов пищеварения (печень, желчный пузырь, поджелудочная)",
                        price: 120,
                        researchCategoryId: 1,
                    },
                    {
                        id: 23,
                        name: "УЗИ мочевыделительной системы (почки, мочевой пузырь)",
                        price: 120,
                        researchCategoryId: 1,
                    },
                    {
                        id: 25,
                        name: "УЗИ щитовидной железы",
                        price: 200,
                        researchCategoryId: 1,
                    }
                ]
            },
            {
                id: 8,
                name: "Женский льготный комплекс у РИТЫ",
                price: 500,
                researches: [
                    {
                        id: 26,
                        name: "Вагиноскоп",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 27,
                        name: "УЗИ малого таза (матка, придати, яичники)",
                        price: 200,
                        researchCategoryId: 1,
                    },
                    {
                        id: 28,
                        name: "Мазок на микрофлору влагалища",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 29,
                        name: "Внутренний осмотр влагалища",
                        price: 50,
                        researchCategoryId: 1,
                    },
                    {
                        id: 30,
                        name: "УЗИ молочной железы",
                        price: 200,
                        researchCategoryId: 1,
                    }
                ]
            }
        ],
        reviews: [],
        equipment: [],
        deep_procedures: []
    },
    {
        id: 14,
        name: "Больница \"Восток\" Хуньчунь",
        slug: "bolnitsa-vostok-hunchun",
        category: {
            id: 1,
            name: "Общий профиль",
            color: "#28b53b"
        },
        rating: 0,
        address: "吉林省珲春市",
        location: {
            address: "Хуньчунь, Яньбянь-Корейский автономный округ, Гирин, Китай",
            lat: 42.8624899,
            lng: 130.36577
        },
        description: "<p>1 2 3</p>",
        procedures: [
            {
                id: 3,
                name: "Иголки для лечения заболеваний костей"
            },
            {
                id: 9,
                name: "Уколы в копчик"
            },
            {
                id: 10,
                name: "Уколы с травами"
            }
        ],
        gallery: [],
        main_image: {} as BaseImage,
        reviewsCount: 0, price: "От 460 ¥", priceFor: "за комплексное обследование", includes: [], doctors: [],
        video: null,
        research_categories: [],
        reviews: [],
        equipment: [],
        deep_procedures: []
    }
]