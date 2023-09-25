import DocView from '@/views/viewDoc/DocView.vue'
import ToolView from '@/views/viewTool/ToolView.vue'
import AboutView from '@/views/viewAbout/AboutView.vue'
import DocIcon from '@/views/viewHome/icons/IconDoc.vue'
import IconTool from '@/views/viewHome/icons/IconTool.vue'
import AboutIcon from '@/views/viewHome/icons/IconAbout.vue'

const homeRouter = [
    {
        path: '/doc',
        name: 'Doc',
        icon: DocIcon,
        component: DocView,
        info: 'DocPage for learn!'
    },
    {
        path: '/tool',
        name: 'Tool',
        icon: IconTool,
        component: ToolView,
        info: 'ToolPage for develop!'
    },
    {
        path: '/about',
        name: 'About',
        icon: AboutIcon,
        component: AboutView,
        info: 'AboutPage for vite!'
    }
]

export default homeRouter
