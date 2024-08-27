import { ImcTable } from 'src/imc-calculator/imc-calculator.dtos';

export function renderImcTable(obj: ImcTable) {
  const outputTemplate = '<table>{rows}</table>';
  const rows = Object.keys(obj)
    .map(
      (propName) => `
    <tr>
        <td>${propName}</td>
        <td>${obj[propName]}</td>    
    </tr>`,
    )
    .join('');

  return outputTemplate.replace('{rows}', rows);
}

export function field(label: string, name: string, value: string) {
  return `
    <label>${label}:</label>
    <input value="${value ?? ''}" id="${name}" name="${name}" /><br />
  `;
}

export function result(imc: string, description: string) {
  return `
    <div>
      <span>imc: ${imc}</span>, ${description}
    </div>
  `;
}
