
import ToolView from '@/views/viewTool/ToolView.vue';
import AboutView from '@/views/viewAbout/AboutView.vue';
import DocIcon from "@/views/viewHome/icons/IconDoc.vue";
import IconTool from "@/views/viewHome/icons/IconTool.vue";
import AboutIcon from "@/views/viewHome/icons/IconAbout.vue";

const DocRouter = [
    {
        path : "/tool11",
        name : "Tool111",
        Icon : IconTool,
        component: ToolView,
        info : "ToolPage for develop!",
        title: "1111111111111111111111111111111111111111111111111111111111111111111111111"
    },
    {
        path : "/about111",
        name : "About111",
        Icon : AboutIcon,
        component: AboutView,
        info : "AboutPage for vite!",
        title: "1222"
    }
  ];

export default DocRouter;