// Мой ключ.
const myApiKey = "502d7d64f573f4e8406b14d120b144fc";
// Секция со списоком объектов-исполнителей.
const artistList = document.querySelector('.artists');
// Список объектов-исполнителей.
const artistProfile = artistList.querySelectorAll('.artists__profile');
// Секция со списоком объектов-треков.
const trackListMain = document.querySelector('.track__list');
// Список объектов-треков.
const trackList = trackListMain.querySelectorAll('.track');


/**
 * Назначение обработчика загрузки страницы, получение списка топ-12 исполнителей по api, передача данных в константы для отображения.
 * Вызов функции для получения по api списка топ-3 тегов исполнителя.
 * Вызов функции для получения по api списка топ-10 треков.
 */
 document.addEventListener('DOMContentLoaded', function(){
   fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${myApiKey}&limit=${artistProfile.length}&format=json`)
        .then(response => response.json())
        .then(list => {
            list = list.artists.artist;
            for(let i = 0; i < list.length;i++)
            {
                artistProfile[i].querySelector('.artists__profile__text__bold').textContent = list[i].name;
                artistProfile[i].querySelector('.artists__profile__image').src = list[i].image[0]['#text'];
                artistProfile[i].href = list[i].url;                
                setTages(artistProfile[i].querySelector('.artists__profile__text__bold'), artistProfile[i].querySelector('.genre'));
                setTracks();
            }
        })
        .catch(
            (error) => {alert("Can't find data for artists! " + error);}
        );
 })

/**
 * Получение по api и отображение топ-3 тегов исполнителя.
 * @param {span с именем исполнителя} artistName 
 * @param {класс html-тега, в котором отображается полученный топ-3} tagesClass 
 */
function setTages(artistName, tagesClass){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${artistName.textContent.replaceAll(" ", "%20")}&api_key=${myApiKey}&format=json`)
    .then(response => response.json())
    .then(list => {
        let j=0;
        let str = "";
        list = list.toptags.tag;
        while(j<3){
            str += list[j].name;
            if(j < 2) {str += " • ";}
            j++;
        }
        tagesClass.textContent = str;  
    })
    .catch(
        // (error) => {alert("Can't find data for tags! " + error);}
    );   
};

/**
 * Получение списка топ-10 треков по api, передача данных в константы для отображения.
 * Вызов функции для получения списка топ-3 тегов исполнителя трека.
 */
function setTracks(){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${myApiKey}&limit=${trackList.length}&format=json`)
    .then(response => response.json())
    .then(list => {
        list = list.tracks.track;
        for(let i = 0; i < list.length;i++)
            {
                trackList[i].querySelector('.artists__profile__text__bold').textContent = list[i].name;
                trackList[i].querySelector('.artists__profile__text__bold').href = list[i].url;
                trackList[i].querySelector('.track__image').src = list[i].image[3]['#text'];
                trackList[i].querySelector('.track__image').parentNode.href = list[i].url;
                trackList[i].querySelector('.track__artist__name').textContent = list[i].artist.name;
                trackList[i].querySelector('.track__artist__name').href = list[i].artist.url;
                setTages(trackList[i].querySelector('.track__artist__name'), trackList[i].querySelector('.track__txt__thin'));
            }
    })
    .catch(
        (error) => {alert("Can't find data for tracks! " + error);}
    );
};   