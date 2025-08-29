# Relatório de Implementação de serviços AWS
Data: 28/08/2025
Empresa: Abstergo industries
Responsável: Guilherme Givigi

## Introdução
Este relatório apresenta o processo de implementação de ferramentas na empresa Abstergo Industries, realizado por Guilherme Givigi. O objetivo do projeto foi *elencar* 3 serviços AWS com a finalidade de *realizar* a diminuição dos custos imediatos da empresa.

## Descrição do Projeto
O projeto de implementação de ferramentas foi construído em 3 etapas, cada uma com seus objetivos específicos. A seguir, serão descritas as etapas do projeto

## Etapa 1:
Ferramenta: AWS Cost Explorer

Apicabilidade: Análise detalhada e visualização de custos em tempo real.

Caso de uso:
Identificação de recursos ociosos (ex: instâncias EC2 subutilizadas, volumes EBS não utilizados) e gastos incomuns. Será aplicado através de relatórios personalizados com filtros por serviço, região e tags, permitindo a tomada de ação imediata para eliminar desperdícios.

## Etapa 2:
Ferramenta: AWS Budgets

Aplicabilidade: Definição de orçamentos personalizados com alertas proativos.

Caso de uso:
Criação de budgets mensais por departamento (ex: P&D, produção) com notificações via e-mail/SNS quando os gastos atingirem 80%, 90% e 100% do limite estipulado. Isso evitará surpresas na fatura e permitirá ajustes rápidos.

## Etapa 3:
Ferramenta: AWS Compute Optimizer

Aplicabilidade: Otimização automática de recursos de computação.

Caso de uso:
Análise de instâncias EC2 e recomendações de redimensionamento com base no uso histórico de CPU e memória. A implementação deve diminuir custos sem impactar performance.

## Conclusão:
A implementação dessas ferramenta de *finops na empresa Abstergo tem como objetivo a aplicação de realizar um controle de custos inteligente e adaptativo de modo a reduzir gastos não eficientes na utilização de serviços de nuvem por esta empresa. Recomenda-se a continuidade da utilização das ferramentas implementadas e a busca por novas tecnologias que possam melhorar ainda mais os processos da empresa.

## Anexos:

Em adição ao material, coloquei um pequeno guia para guiá-los no entendimento de alguns conceitos avaliados. https://aws.amazon.com/pt/blogs/aws-brasil/entendendo-seus-conjuntos-de-dados-de-custos-na-aws-um-cheat-sheet/
