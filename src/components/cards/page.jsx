import { HiMiniBookOpen } from "react-icons/hi2";
import { FaLaptopCode, FaPalette, FaChartLine, FaUsersCog, FaLightbulb } from "react-icons/fa";

export default function Cards() {

    const cards = [
        {
            id: 1,
            titulo: "Domine a Gramática",
            descricao: "Melhore sua escrita com dicas automáticas de gramática e ortografia.",
            icon: <HiMiniBookOpen size={100} className="text-blue-400" />
        },
        {
            id: 2,
            titulo: "Aprenda a Programar",
            descricao: "Comece sua jornada no desenvolvimento com cursos interativos.",
            icon: <FaLaptopCode size={100} className="text-green-400" />
        },
        {
            id: 3,
            titulo: "Design Criativo",
            descricao: "Explore ferramentas e tutoriais para criar interfaces incríveis.",
            icon: <FaPalette size={100} className="text-pink-400" />
        },
        {
            id: 4,
            titulo: "Crescimento Profissional",
            descricao: "Dicas e recursos para impulsionar sua carreira e liderança.",
            icon: <FaChartLine size={100} className="text-yellow-400" />
        },
        {
            id: 5,
            titulo: "Gestão de Equipes",
            descricao: "Aprenda a liderar times de forma eficiente e colaborativa.",
            icon: <FaUsersCog size={100} className="text-purple-400" />
        },
        {
            id: 6,
            titulo: "Ideias Inovadoras",
            descricao: "Inspire-se com soluções criativas para problemas do dia a dia.",
            icon: <FaLightbulb size={100} className="text-orange-400" />
        },
        {
            id: 7,
            titulo: "Domine a Gramática",
            descricao: "Melhore sua escrita com dicas automáticas de gramática e ortografia.",
            icon: <HiMiniBookOpen size={100} className="text-blue-400" />
        },
        {
            id: 8,
            titulo: "Aprenda a Programar",
            descricao: "Comece sua jornada no desenvolvimento com cursos interativos.",
            icon: <FaLaptopCode size={100} className="text-green-400" />
        },
        {
            id: 9,
            titulo: "Design Criativo",
            descricao: "Explore ferramentas e tutoriais para criar interfaces incríveis.",
            icon: <FaPalette size={100} className="text-pink-400" />
        }
    
    ]
    return (
        <>
        {cards.map((card)=> (
            <div key={card.id} className="flex flex-col-reverse items-center lg:h-80 text-white  bg-gray-700 rounded-2xl lg:flex-row-reverse p-8">
                
            <div className=" flex flex-col text-center gap-3 m-auto">
                <p className="text-2xl lg:text-3xl font-bold " >{card.titulo} </p>
                <p className="m-2">{card.descricao}</p>
                <button className="bg-green-800 hover:bg-green-950 text-white w-50 m-auto rounded-md p-2 cursor-pointer transition-all duration-200 justify-between ">Start a free trial</button>
            </div>
            <div> {card.icon}</div>
            </div>
        ))}
        </>
       )
}