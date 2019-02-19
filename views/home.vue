<template>
    <div>
        <div class="home">
            <br>
            <br>
            <br>
        <h1>Viens defier tes amis</h1>
        <router-link to="/categorie"><img class="logo" src="../assets/logo.png" alt=""></router-link>
        <h3>Ça va groover !</h3>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home{
    background: url("../assets/Fond2.jpg");
    background-size: cover;
    height: 842px;
    width: auto;
    margin-top: -92px;
    margin-right: -8px;
    margin-left: -8px;
}
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
@import url('https://fonts.googleapis.com/css?family=Sigmar+One');
h1{
    font-family: 'Sigmar One', cursive;
    font-size: 60px;
    color:white;
}
h3{
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-size: 320%;
    font-weight: 200;
}
.blocc{
    height: 135px;
}
img.logo{
    width: 160px;
    margin-top: 10%;
}
.logo:hover{
    opacity: 0.8;
}
@-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  .logo {
	-webkit-animation: rotate-center 2s ease-in-out 4 both;
	        animation: rotate-center 2s ease-in-out 4 both;
}


</style>
