<template>
    <a-layout id="layout-main">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <LayoutAside :collapsed="collapsed" />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="">
                <LayoutHeader @colapsed="handlerCollspsed" />
            </a-layout-header>
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <LayoutMain />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import LayoutAside from './components/aside/Index';
import LayoutHeader from './components/Header';
import LayoutMain from './components/Main';
import {reactive, toRefs} from 'vue';
export default ({
    name:"layout",
    components:{
        LayoutAside,
        LayoutHeader,
        LayoutMain
    },
    setup(props) {
        const data = reactive({
            selectedKeys:['1'],
            collapsed: JSON.parse(localStorage.getItem("collapsed"))
        })

        const handlerCollspsed = (value) => {
            const bool = !data.collapsed;
            data.collapsed = bool;
            localStorage.setItem("collapsed", bool);
        }

        return {
            ...toRefs(data),
            handlerCollspsed
        }
    },
})
</script>
<style lang="scss">

</style>