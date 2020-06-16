//Задание №1
let task01_cont = document.getElementById("task01");
for(let i=0; i<task01_cont.children.length;i++) {
    let div_child = task01_cont.children[i];
    div_child.addEventListener("click",changeDivColor);
}

function changeDivColor(el) {
    //debugger;
    let target = el.srcElement;
    if(target.nodeName == "P") {
        target.parentElement.classList.toggle("task01-div_clicked");
    } else {
        target.classList.toggle("task01-div_clicked");
    }
}

//Задание #2
function ClickChanger(el) {
    el.innerText = parseInt(el.innerText) + 1;
}

//Задание №3
let task03_form = document.getElementById("task03-new_comment_form");
let task03_comments = document.getElementById("task03-comments");
function task03submit(el) {
    let text_comment = task03_form["task03-new_comment"].value;
    if(text_comment!="") {
        let date_options = {
            day: 'numeric', month: 'long', year: 'numeric',  
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
          };
        let date_str = new Date().toLocaleDateString("ru-RU",date_options);
        let new_div = document.createElement("div");
        new_div.classList.add("task03-comment");
        
        //создаем блок аватара
        let div_avatar = document.createElement("div");
        div_avatar.classList.add("task03-comment_avatar");
        let avatar = document.createElement("img");
        avatar.setAttribute("src","./img/cat.png");
        div_avatar.appendChild(avatar);
        new_div.appendChild(div_avatar);
        //Добавляем блок инфо и текст комментария
        let div_box = document.createElement("div");
        div_box.classList.add("task03-comment_box");
        let info_box = document.createElement("div");
        info_box.classList.add("task03-comment_info");
        let p_author = document.createElement("p");
        p_author.innerText = "автор: Админ";
        let p_date = document.createElement("p");
        p_date.innerText = "дата: " + date_str;
        info_box.appendChild(p_author);
        info_box.appendChild(p_date);
        div_box.appendChild(info_box);
        new_div.appendChild(div_box);

        let comment_text = document.createElement("p");
        comment_text.classList.add("task03-comment_text");
        comment_text.innerText = text_comment;
        div_box.appendChild(comment_text);
        task03_comments.appendChild(new_div);

        comment_text.scrollIntoView();
    }
    task03_form["task03-new_comment"].value = "";
}

//Задание №4
let books = [
    {
        артикул: 1,
        автор: "Алексей Доронин",
        наименование: "Метро 2033: Логово",
        описание: "Отрезанный от всего мира, на севере Московской области пытается выжить маленький поселок Мирный. Он обнесен стеной и состоит из модульных домов, герметичных и защищенных от радиации. Вроде бы маленькой колонии в сто с лишним человек ничего не угрожает, кроме безнадеги и медленной деградации. Запасов должно хватить еще на десяток лет. Что делать дальше – никто не задумывается. Но внезапно люди начинают пропадать, просто уходя в никуда. Постепенно к жителям приходит понимание, что с этим местом и его окрестностями связана мрачная тайна, уходящая корнями в довоенное время. Но никто не представляет, насколько она ужасна."
        
    },
    {
        артикул: 2,
        автор: "Сергей Чехина",
        наименование: "Метро 2033: Свора",
        описание: "На этот город не падали ракеты, но пришедшее с юга ядовитое облако убило всех, кто не успел спрятаться в убежищах. Несмотря на пережитый ужас, уцелевшие не поняли урока и с упоением продолжили грызню за место под солнцем. Увлекшись новой войной, они совсем позабыли, что на окраинах обитают стаи чудовищ-падальщиков. Запасы мертвечины подходят к концу, и вот уже хвостатые хозяева руин совсем иными взглядами смотрят на двуногих соседей. Появляется Свора, ведомая беспощадным вожаком. И цели этой Своры – убивать, поглощать и размножаться."
    
    },
    {
        артикул: 3,
        автор: "Руслан Мельников",
        наименование: "Муранча",
        описание: "Карта «Вселенной Метро 2033» неуклонно расширяется, и на ней появляются отметки о все новых выживших. Добро пожаловать в постъядерный Ростов-на-Дону! «Муранча», несмотря на странное свое название, на немного экзотическую локацию – роман сильный и яркий. Однозначно один из лучших в серии. Непохожий на остальные. Увлекательный, но при этом мрачный и лирический."
        
    },
    
    {
        артикул: 4,
        автор: "Александр Шакилов",
        наименование: "Война кротов",
        описание: "«Война кротов» – первая книга серии не о России. Место действия – постъядерный Киев. Время действия – 2033 год. Герой – человек, которого настоящее приключение вырывает из мирной жизни, а на карте оказывается покой его родной станции, жизнь близких и судьба всего Киевского метро…"
      
    },
    {
        артикул: 5,
        автор: "Анна Калинкина",
        наименование: "Метро 2033: Под-Московье",
        описание: "«Когда-то Подмосковье считалось провинцией и почти деревней рядом с блистательной Москвой – столицей России, одним из крупнейших и дорогих мегаполисов мира. Но так было лишь до тех пор, пока Последняя Война не загнала остатки человечества под землю. В тесное переплетение туннелей метрополитена, секретных бункеров и подземных коллекторов. В Под-Московье. Но даже здесь, в Царстве крыс, в котором правят голод и нужда, а цена человеческой жизни измеряется в патронах к автомату Калишникова, осталось место для веры, любви и надежды – трех самых ярких светильников, погасить которые не под силу даже самому беспросветному мраку."
        
    },
    {
        артикул: 6,
        автор: "Руслан Мельников",
        наименование: "Метро 2033: Из глубин",
        описание: "Разговоры с призраками… Бесконечные лабиринты и хтонические чудовища, способные убивать сквозь титановую обшивку… Деревья, растущие под землей… «Саргассовы моря» из разлагающейся плоти… Да, все это безумие, но они попали в его эпицентр, а значит, чтобы выжить, тоже должны поступать безумно и действовать по безумным законам. Особенно, когда за бортом – повышенный уровень рвущегося из глубин ада!"
		
    }
];

function crtTableElement(prntEl, type, text) {
    let tEl = document.createElement(type);
    if(text!=undefined) {
        tEl.innerText = text;
    }
    if(type=="table"){
        tEl.classList.add("task04");
    }
    prntEl.appendChild(tEl);
    return tEl;
}

function setTableStyle() {
    let StyleText =  `table.task04{text-decoration: none;border-collapse:collapse;width:100%;text-align:center;}
	table.task04 th{width:auto; font-weight:normal;font-size:14px; color:#ffffff;background-color:#354251;}
	table.task04 td{font-size:13px;color:#000000;text-align:left;}
    table.task04 td,table.task04 th{white-space:pre-wrap;padding:10px 5px;line-height:13px;vertical-align: middle;border: 1px solid #354251;}	
    table.task04 tr:hover{background-color:#e0e0e0}
    table.task04 tr:hover td{color:#000000;cursor:default;}`;

    //let styleEl = document.getElementsByTagName("style");
    let styleEl = document.getElementById("table-style");
    if(styleEl==undefined){
        let styleEl = document.createElement("style");
        styleEl.type = "text/css";
        styleEl.innerHTML = StyleText;
        styleEl.setAttribute("id", "table-style");
        document.getElementsByTagName("head")[0].appendChild(styleEl);
    } else {
        if(styleEl.innerHTML!=StyleText) {
            styleEl.innerHTML = StyleText;
        }
    }
}

function createTableBooks() {

    setTableStyle();

    let task04_container = document.getElementById("task04");
    task04_container.innerHTML="";
    //Создаем таблицу
    let tbl = crtTableElement(task04_container, "table");

    //Берем 0 элемент массива и выводим заголовок таблицы
    let tr = crtTableElement(tbl, "tr");
    for(let prop in books[0]) {
        crtTableElement(tr, "th", prop);    
    }

    //Создаем строки таблицы
    for(let i=0; i<books.length; i++) {
        let tr = crtTableElement(tbl, "tr");
        for(let prop in books[i]) {
           crtTableElement(tr, "td",  books[i][prop]);    
        }    
    }

}

createTableBooks();