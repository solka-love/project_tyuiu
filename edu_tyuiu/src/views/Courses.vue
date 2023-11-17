<template>
    <div class="toolbar">
        <input 
            type="text"     
            id="search_course" 
            placeholder="Поиск курса 🔎"
            v-model="searchQuery"
            >
        <select id="sort_courses" v-model="sortOptionName">
            <option value="title">Название</option>
            <option value="name">Автор</option>
        </select>
        <select id="dir_sort" v-model="sortOptionDir">
            <option value="dir">↓</option>
            <option value="rev">↑</option>
        </select>
    </div>
    <div class="courses">
        <div 
            class="course" v-for="course in courses"
            @click="$router.push(`/courses/${course.id}`)"
            >
            <div>{{ course.title }}</div>
            <div>Автор: {{ course.author }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            {
                return {
                    courses: [
                        {id: 1, title: "Какой то курс 1", author: "Кто-то"},
                        {id: 2, title: "Какой то курс 2", author: "Кто-то"},
                        {id: 3, title: "Какой то курс 3", author: "Кто-то"},
                        {id: 4, title: "Какой то курс 4", author: "Кто-то"},
                        {id: 5, title: "Какой то курс 5", author: "Кто-то"},
                        {id: 6, title: "Какой то курс 6", author: "Кто-то"},
                        {id: 7, title: "Какой то курс 7", author: "Кто-то"},
                        {id: 8, title: "Какой то курс 8", author: "Кто-то"},
                        {id: 9, title: "Какой то курс 9", author: "Кто-то"},
                        {id: 10, title: "Какой то курс 10", author: "Кто-то"}
                    ],
                    sortOptionName:"title",
                    sortOptionDir:"dir",
                    searchQuery: ""
                }
                
            }
        },
        methods: {
        }
    }
</script>

<style lang="css" scoped>
.toolbar{
    position: absolute;
    right: 1vmin;
    top: 14vmin;
    display: flex;
    gap:1vmin;
    height: 5.046vmin;
    
    border: 0.6vmin solid #2677F0;
    border-radius: 0.5vmin;

    font-size: 2.5vmin;
    height: 5.046vmin;
    
    width:min-content;
    
    background: #2677F0;
}


#search_course, #sort_courses, #dir_sort{
    font-size: 2.5vmin;
    color: #FFF;
    padding: 0 1vmax 0 1vmax;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #2677F0;
}

*::placeholder {
    color:white;
}

.courses {
    position: absolute;
    top: 20vmin;
    left: 1vmin;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.course {
    width: 30vw;
    height: 20vmin;
    padding: 1vmin;
    background-color: #2677F0;
    border-radius: 1vmin;
    margin:1.5vmin;
    font-size: 2.5vmin;
    color: #FFF;
}
.create_course {
    width: 30vw;
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
</style>