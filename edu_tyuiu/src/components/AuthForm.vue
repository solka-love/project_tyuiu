<template>
<div class="auth__form" v-if="!$store.state.isAuth">
    <div class="log__in">Авторизация</div>
    <div class="restore">
    Уважаемые студенты, вход на платформу осуществляется с помощью корпоративной учётной записи. Если у вас нет к ней доступа, пройдите по <a href="">ССЫЛКЕ</a>.
    </div>
    <div class="input">
        <input id="input__email" name="email" type="email" placeholder="Логин">
        <select id="select__domain">
            <option value="tyuiu">@tyuiu.ru</option>
            <option value="std_tyuiu">@std.tyuiu.ru</option>
        </select>
    </div>
    <input id="input__password" name="password" type="password" placeholder="Пароль">
    <button 
        class="input" 
        id="btn__login">
        Вход
    </button>
    <a class="restore" href="">Забыли пароль?</a>
</div>
</template>

<script>
</script>

<style lang="css" scoped>
select::-ms-expand{
    display: none;             /* remove arrow IE     */
}
.auth__form{
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;

    top:53vmin;
    left:50%;
    transform:translate(-50%, -50%);
    padding: 2.778vmin;
    gap: 4.167vmin;

    width: 60vmin;
    height: 70vmin;

    border-radius: 3.333vmin;
    background: linear-gradient(180deg, rgba(107, 104, 245, 0.60) 0%, rgba(128, 0, 255, 0.23) 138.62%);

    box-shadow: 0 0.370vmin 0.370vmin 0 rgba(0, 0, 0, 0.25);
}

.log__in{
    color: #FFF;

    text-shadow: 0px 0.370vmin 0.370vmin rgba(0, 0, 0, 0.25);
    font-family: Inter;
    font-size: 3.704vmin;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.restore, a {
    color: #FFF;

    text-align: center;
    font-family: Inter;
    font-size: 2.222vmin;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
}

#btn__login {
    width: 23.241vmin;
    height: 6.204vmin;

    border-radius: 4.630vmin;
    background: #72AAFF;
    border: none;

    color: #FFF;

    text-align: center;
    font-family: Inter;
    font-size: 3.333vmin;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
}
#btn__login:active {
    background: #5179b4;
}

#input__email, #select__domain, #input__password {
    background: #D9D9D9;
    color: #474747;
    font-family: Inter;
    font-size: 1.852vmin;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 0.556vmin 0.556vmin 0.556vmin 0.556vmin;

    height: 6.019vmin;
}

#input__email:focus, #select__domain:focus, #input__password:focus {
    box-shadow: inset 0 0 .01vmin 0.1vmin rgba(14, 214, 31, 0.5), 0 0 .01vmin 0.1vmin rgba(14, 214, 31, 0.5);
}


#input__email {
    width: 32vmin;
    border-radius: 1.111vmin 0px 0px 1.111vmin;
}
#select__domain {
    text-align: center;
    width: 16vmin;
    border-radius: 0px 1.111vmin 1.111vmin 0px;
    border-left: 0.4vmin solid black;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: linear-gradient(90deg, #D9D9D9 0%, rgba(120, 206, 255, 0.5) 150%);
}
#input__password {
    width: 48vmin;
    border-radius: 1.111vmin;
}
</style>