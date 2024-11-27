import { IPlano } from "@/components/Plano";

export const planos: IPlano[] = [
    {
      nomePlano: "BRONZE (15 dias)",
      className: "sm:h-[45vh]",
      valor: "R$ 129,99",
      valorAntigo: "R$ 164,99",
      caracteristicas: [
        { quantidade: 5, descricao: "Cinco Artes" },
        { quantidade: 3, descricao: "Três Vídeos" },
        { quantidade: 2, descricao: "Stories Semanais" }
      ]
    },
    {
      nomePlano: "PLATINUM (3 meses)",
      className: "sm:h-[55vh] border-[#7C67FE]",
      valor: "R$ 599,99",
      valorAntigo: "R$ 718,99",
      caracteristicas: [
        { quantidade: 20, descricao: "Vinte Artes" },
        { quantidade: 10, descricao: "Dez Vídeos" },
        { quantidade: 3, descricao: "Três Stories Semanais" }
      ]
    },
    {
      nomePlano: "GOLD (1 mês)",
      className: "sm:h-[45vh]",
      valor: "R$ 221,99",
      valorAntigo: "R$ 265,22",
      caracteristicas: [
        { quantidade: 10, descricao: "Dez Artes" },
        { quantidade: 5, descricao: "Cinco Vídeos" },
        { quantidade: 3, descricao: "Três Stories Semanais" }
      ]
    }
  ];
  