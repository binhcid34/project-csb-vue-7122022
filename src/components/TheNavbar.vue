<template>
    <div class="navbar">
      <router-link class="router-link"  to="/">Quản lý tàu</router-link> 
      <router-link class="router-link" to="/monitor">Giám sát</router-link>
      <router-link class="router-link" to="/report">Báo cáo thống kê</router-link>
    </div>
</template>
<style>
.navbar{
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: flex-start ;
    align-items: center;
    padding-left: 24px;
    border-radius: 8px;
    border: 2px solid #1D83C3;
}
.router-link{
    height: 12px;
    padding: 8px;
    border-radius: 5px;
    border: 2px solid #1D83C3;
    text-align: center;
    align-items: center;
    margin-right: 24px;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
}
</style>