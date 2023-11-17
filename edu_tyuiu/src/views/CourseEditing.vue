<template>
    <div>
        <input id="course_title" type="text" placeholder="Название курса" v-model="course_title">
        <ul class="navbar">
            <il 
                class="course_info" 
                :class="{'course_info_active':nav_check_box==true}"  
                @click="$event=>{
                    nav_check_box=true
                    edit_les_check_box=false
                    }"
                >Описание курса
            </il>
            <il 
                class="course_info" 
                :class="{'course_info_active':nav_check_box==false}" 
                @click="$event=>{
                    nav_check_box=false
                    edit_les_check_box=false
                    }"
                >Содержание курса
            </il>
            <button 
                class="edit_course"
                @click="$event=>{
                    let lesson = lessons.find(les => les.id === lesson_id)
                    console.log(idx)
                    if (edit_les_check_box && lesson === undefined) {
                        lessons.push({
                            id: lesson_id, 
                            title: lesson_title, 
                            ref_video: lesson_ref_video, 
                            file_video: lesson_file_video, 
                            text: lesson_text
                        })
                    }
                    if (edit_les_check_box && lesson !== undefined) {
                        lesson.title = lesson_title
                        lesson.ref_video = lesson_ref_video
                        lesson.file_video = lesson_file_video
                        lesson.text = lesson_text
                    }
                    else {
                        // Сценарий сохранения курса
                    }
                }"
                >Сохранить
            </button>
        </ul>

        <button class="cancel_edit_course">X</button>
    </div>
    <div class="main">
        <div class="info" v-if="nav_check_box">
            <label for="course_info">Описание курса</label>
            <label for="comps">Приобретаемые компетенции</label>
            <label for="preps">Требуемая подготовка</label>

            <textarea v-model="course_info" id="course_info"></textarea>
            <textarea v-model="comps" id="comps"></textarea>
            <textarea v-model="preps" id="preps"></textarea>
        </div>

        <div class="lessons" v-if="!nav_check_box && !edit_les_check_box">
            <div 
                class="create_lesson"
                @click="$event=>{
                    lesson_id = -1          // Создаём урок на бд и возвращаем id
                    lesson_title = ''
                    lesson_ref_video = ''
                    lesson_file_video = null
                    lesson_text = ''
                    edit_les_check_box = true
                }">
                +
            </div>
            <div 
                class="lesson" v-for="lesson in lessons"
                >
                <div>{{ lesson.title }}</div>
                <div class="navbar_lesson">
                    <button 
                    class="edit_lesson" 
                    @click="$event=> {
                        lesson_id = lesson.id
                        lesson_title = lesson.title
                        lesson_ref_video = lesson.ref_video
                        lesson_file_video = lesson.file_video
                        lesson_text = lesson.text
                        edit_les_check_box = true
                    }
                    ">📝</button>
                    <button 
                    class="del_lesson"  
                    @click="$event=> {
                        this.lessons = this.lessons.filter(p => p.id !== lesson.id)
                    }
                    ">🗑</button>
                </div>
            </div>
        </div>

        <div class="edit_lesson" v-if="edit_les_check_box">
            <div class="title_and_ref_video">
                <input v-model="lesson_title" placeholder="Название урока">
                <input id="file_video" type="file" placeholder="Загрузите видео">
                <input v-model="lesson_ref_video" placeholder="Ссылка на видео">
            </div>
            <div class="text_and_video">
                <textarea v-model="lesson_text"></textarea>
                <!-- Здесь должен быть видеоплеер но я не знаю как это сделать -->
                <div class="player">
                    <iframe width="790" height="444" src="https://www.youtube.com/embed/XzLuMtDelGk" title="Vue 3 фундаментальный курс от А до Я" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // Общие данные
                nav_check_box: false,
                edit_les_check_box: false,
                course_title: "Получается с бд, при редактирование уже созданных курсов",
                // Данные Описания курса
                course_info: "Получается с бд, при редактирование уже созданных курсов",
                comps: "Получается с бд, при редактирование уже созданных курсов",
                preps: "Получается с бд, при редактирование уже созданных курсов",
                // Данные Содержания курса
                lessons: [
                        {id: 1, title: "Урок 1", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 2, title: "Урок 2", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 3, title: "Урок 3", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 4, title: "Урок 4", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 5, title: "Урок 5", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 6, title: "Урок 6", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 7, title: "Урок 7", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 8, title: "Урок 8", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"},
                        {id: 9, title: "Урок 9", ref_video: "Какой то путь в интернете", file_video: "Какой то путь в бд", text: "Какой то текст"}
                    ],
                lesson_id: 1,
                lesson_title: "",
                lesson_ref_video: "",
                lesson_file_video: null,
                lesson_text: ""
            }
        }
    }
</script>

<style lang="css" scoped>
#course_title{
    position: absolute;
    top: 6vmin;
    left: 45vmin;
    transform:translate(-50%, -50%);
    
    font-family: Inter;
    font-size: 3.333vmin;
    font-weight: 300;
    line-height: normal;
    text-decoration: none;
    color: rgb(0,227,197);

    background-color: #22b62200;
}
#course_title::placeholder {
    color: rgb(0,227,197)
}

/* Редактирование урока */
.title_and_ref_video input{
    height: 5vmin;
    width: 29vw;
    margin: 1vmin;
    font-size: 2.5vmin;
}
.text_and_video {
    display: flex;
    position: relative;
    width: 90vw;
    height: 60vh;
}

.text_and_video textarea {
    width: 48vw;
    height: 100%;
}
.player{
    width: 48vw;
    height: 100%;
}
.player iframe{
    height: 100%;
    width: 100%;

    margin: 0;
    padding: 0;
}

/* Основная часть */
.main {
    position: absolute;
    top:20.0vmin;
    padding: 2.5vmin;
    width: 100%;
}

.info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 4vmin 65vmin;
}

/* Стилизация Описания курса */
.main textarea {
    resize: none;
    margin: 0.75vmin;
    padding: 1vmin;
    font-size: 1.5vmin;
}
.main label {
    text-align: center;
    font-size: 2vmin;
}
/* Стилизация Содержимого курса */
.lessons {
    position: absolute;
    top: 1.5vmin;
    left: 1vmin;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 98.5%;
}

.lesson {
    height: 20vmin;
    padding: 1vmin;
    background-color: #2677F0;
    border-radius: 1vmin;
    margin:1.5vmin;
    font-size: 2.5vmin;
    color: #FFF;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.navbar_lesson {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.navbar_lesson button{
    background-color: rgba(255, 255, 255, 0);
}
.edit_lesson {
    font-size: 4vmin;
}
.del_lesson {
    font-size: 6vmin;
}
.create_lesson {
    height: 20vmin;
    padding: 1vmin;
    background-color: #f0b026;
    border-radius: 1vmin;
    margin:1.5vmin;

    font-size: 14vmin;
    color: #FFF;
    text-align: center;
    user-select: none;
}
/* Стилизация панели навигация */
.navbar {
    position: relative;
    top: 5vmin;
    left:50%;
    transform:translate(-50%, -50%);
    width: fit-content;
    border-radius: 1vmin;
    gap: 2vmin;

    display: flex;
}
.course_info, .course_lessons, .edit_course{
    font-size: 2.5vmin;
    color: white;
    margin: 1vmin;
}
.course_info {
    background-color: #2677F0;
    padding: 1vmin;
    border-radius: 1vmin;
    margin: 0;
}
.course_info_active {
    background-color: #4b26f0;
}
.edit_course {
    background-color: rgb(34, 218, 34);
    padding: 1vmin;
    border-radius: 1vmin;
    margin: 0;
}
.edit_course:active {
    background-color: #22b622;
}

.cancel_edit_course {
    position: absolute;
    top: 15vmin;
    right: 2vmin;
    
    font-size: 2.5vmin;
    color: white;
    
    background-color: rgb(218, 34, 34);
    padding: 1vmin;
    border-radius: 1vmin;
    margin: 0;
}

.cancel_edit_course:active {
    background-color: rgb(175, 29, 29);
}
</style>