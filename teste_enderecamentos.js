// Script para criar arquivo de teste de endereçamentos
import * as XLSX from 'xlsx';

// Dados de teste simples
const testData = [
  {
    'Nome': 'A01-001',
    'Armazém': 'G1',
    'Box': ' CONTROLADO'
  },
  {
    'Nome': 'A01-002', 
    'Armazém': 'G1',
    'Box': ' CONTROLADO'
  },
  {
    'Nome': 'A01-003',
    'Armazém': 'G1', 
    'Box': ' CONTROLADO'
  }
];

// Criar workbook
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(testData);

// Adicionar worksheet ao workbook
XLSX.utils.book_append_sheet(wb, ws, 'Enderecos');

// Salvar arquivo
XLSX.writeFile(wb, 'teste_enderecamentos.xlsx');

console.log('Arquivo teste_enderecamentos.xlsx criado com sucesso!');
console.log('Dados incluídos:', testData);