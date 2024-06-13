interface Field {
    name: string;
    type: string;
    size: number | null;
    notNull: boolean;
    isFKey: boolean;
    refTbl: string;
    refField: string;
}

interface Table {
    name: string;
    pKey: string | null;
    fields: Field[];
}

function parseSQL(input: string): Table[] {
    const tables: Table[] = [];
  
    // Regex to match CREATE TABLE statements
    const createTableRegex = /CREATE TABLE "(\w+)" \(([\s\S]+?)\);/g;
    let match;
    
    while ((match = createTableRegex.exec(input)) !== null) {
      const tableName = match[1];
      const tableDefinition = match[2];
  
      const fields: Field[] = [];
      let pKey: string | null = null;
  
      // Regex to match individual field definitions
      const fieldRegex = /"(\w+)" (\w+)(?:\((\d+)\))?( NOT NULL)?,?/g;
      let fieldMatch;
        
      while ((fieldMatch = fieldRegex.exec(tableDefinition)) !== null) {
        const fieldName = fieldMatch[1];
        const fieldType = fieldMatch[2];
        const fieldSize = fieldMatch[3] ? parseInt(fieldMatch[3], 10) : null;
        const notNull = fieldMatch[4] !== undefined;
  
        fields.push({
          name: fieldName,
          type: fieldType,
          size: fieldSize,
          notNull: notNull,
          isFKey: false,
          refTbl: 'NONE',
          refField: 'NONE'
        });
      }      
  
      tables.push({
        name: tableName,
        pKey: pKey,
        fields: fields
      });
    }
  
    return tables;
}

//dev branch