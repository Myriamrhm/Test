<template>
<div>
    <div id="contenu">
        <section>
        <p>Brit Rock</p>
        <img class="img" src="../assets/CatBrit.jpg" alt="">
        </section>
        <section>
        <p>New Wave</p>
        <img class="img" src="../assets/Categorie2.jpg" alt="">
        </section>
        <section>
        <p>Chill</p>
        <img class="img" src="../assets/ChillCat.jpg" alt="">
        </section>
        <section>
        <p>Inconu</p>
        <div class="bloc"></div>
        </section>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#contenu{
    display: flex;
    justify-content: space-around;
}
p{
    // margin-top: 120px;
    font-size: 150%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
}
.img{
    width: 200px;
    height: 200px;
    box-shadow: 8px 8px rgba(255, 255, 255, 0.404);
}
.img:hover{
    transform: scale(1.01);
    outline-style: solid;
    outline-color: rgb(158, 158, 158);
    outline-offset: 15px;
}
.bloc{
    width: 200px;
    height: 200px;
    background-color: darkcyan;
}


</style>
