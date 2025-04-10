import {Mail,UserPlus,Database,Code, Users, UserSquare, NotepadText, User, Calendar, Info, ChartBar, ChartPie, ChartLine} from 'lucide-react';

const CardRecourse=[
    {title:"Email Sent",icon:<Mail/>,count:11361,staticPrasent:14},
    {title:"Sales Obtained",icon:<Database/>,count:431225,staticPrasent:21},
    {title:"New Clients",icon:<UserPlus/>,count:32441,staticPrasent:5},
    {title:"Traffic Received",icon:<Code/>,count:1325134,staticPrasent:14}
]

const SidebarData=[
    {name:"Manage Team",icon:<Users/>},
    {name:"Contact Information",icon:<UserSquare/>},
    {name:"Invoice Balances",icon:<NotepadText/>},
]

const PagesData=[
    {name:"Profile Form",icon:<User/>},
    {name:"Calendar",icon:<Calendar/>},
    {name:"FAQ Page",icon:<Info/>},
]

const ChartData=[
    {name:"BarChart",icon:<ChartBar/>},
    {name:"PieChart",icon:<ChartPie/>},
    {name:"Line Chart",icon:<ChartLine/>},
    {name:"Geaography Chart",icon:<Map/>}
]

export  {CardRecourse,SidebarData,PagesData,ChartData};