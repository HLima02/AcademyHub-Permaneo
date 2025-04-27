import { CurseProps } from '@/types/types'
import python from '../assets/python_5968350.png'
import react from '../assets/atom_9791305.png'
import javascrit from '../assets/javascript_919828.png'
import sql from '../assets/sql-server_5815809.png'

export const cursos: CurseProps[] = [
  {
    id: 1,
    title: "Introdução à Programação com Python",
    description: "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
    price: 49.99,
    created_at: "2023-01-15",
    ico: python,
    url: '/introducao_programacao_python',
    purchased: false
  },
  {
    id: 2,
    title: "Desenvolvimento Web com React",
    description: "Construa interfaces modernas e interativas para a web utilizando React e suas melhores práticas.",
    price: 69.99,
    created_at: "2023-02-10",
    ico: react,
    url: '/desenvolvimento_web_react',
    purchased: false
  },
  {
    id: 3,
    title: "JavaScript Avançado",
    description: "Aprofunde seus conhecimentos em JavaScript, abordando conceitos avançados e boas práticas.",
    price: 59.99,
    created_at: "2023-03-05",
    ico: javascrit,
    url: '/javascript_avancado',
    purchased: false
  },
  {
    id: 4,
    title: "Desenvolvimento Mobile com React Native",
    description: "Crie aplicativos móveis para Android e iOS utilizando React Native e compartilhando código entre as plataformas.",
    price: 79.99,
    created_at: "2023-03-20",
    ico: react,
    url: '/desenvolvimento_mobile_react_native',
    purchased: false
  },
  {
    id: 5,
    title: "Banco de Dados com SQL",
    description: "Aprenda a criar, consultar e gerenciar bancos de dados utilizando SQL.",
    price: 39.99,
    created_at: "2023-04-01",
    ico: sql,
    url: '/banco_de_dados_sql',
    purchased: false
  },
  {
    id: 6,
    title: "DevOps para Desenvolvedores",
    description: "Entenda os fundamentos de DevOps e como implementar práticas de integração e entrega contínuas.",
    price: 89.99,
    created_at: "2023-04-15",
    ico: python,
    url: '/devops_para_desenvolvedores',
    purchased: false
  },
  {
    id: 7,
    title: "Desenvolvimento de APIs com Node.js",
    description: "Construa APIs robustas e escaláveis utilizando Node.js e Express.",
    price: 54.99,
    created_at: "2023-05-10",
    ico: javascrit,
    url: '/desenvolvimento_apis_com_nodejs',
    purchased: false
  },
  {
    id: 8,
    title: "Cibersegurança para Desenvolvedores",
    description: "Aprenda práticas e conceitos essenciais de segurança cibernética para proteger suas aplicações.",
    price: 74.99,
    created_at: "2023-05-25",
    ico: python,
    url: '/ciberseguranca_para_desenvolvedore',
    purchased: false
  },
  {
    id: 9,
    title: "Desenvolvimento de Jogos com Unity",
    description: "Crie jogos incríveis utilizando Unity, uma das engines mais populares do mercado.",
    price: 99.99,
    created_at: "2023-06-05",
    ico: python,
    url: '/desenvolvimento_jogos_unity',
    purchased: false
  },
  {
    id: 10,
    title: "Machine Learning com Python",
    description: "Introdução ao aprendizado de máquina utilizando bibliotecas como Scikit-Learn e TensorFlow.",
    price: 109.99,
    created_at: "2023-06-20",
    ico: python,
    url: '/machine_learning_python',
    purchased: false
  }
]

export const user = {
  id: 1,
  name: "John Doe",
  courses: [
    {
      courseId: 1,
      dateJoined: "2023-02-15"
    },
    {
      courseId: 3,
      dateJoined: "2023-03-10"
    },
    {
      courseId: 5,
      dateJoined: "2023-04-05"
    }
  ]
}
