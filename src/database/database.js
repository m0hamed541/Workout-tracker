import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('workout.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Create exercises table
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS exercises (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          category TEXT,
          muscle_group TEXT,
          equipment TEXT,
          notes TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );`,
        [],
        () => {
          console.log('Exercises table created successfully');
          resolve();
        },
        (_, error) => {
          console.error('Error creating exercises table:', error);
          reject(error);
        }
      );
    });
  });
};

// Exercise-related functions
export const getExercises = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM exercises ORDER BY name;',
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const addExercise = (name, category, muscleGroup, equipment, notes) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO exercises (name, category, muscle_group, equipment, notes) VALUES (?, ?, ?, ?, ?);',
        [name, category, muscleGroup, equipment, notes],
        (_, { insertId }) => {
          resolve(insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const updateExercise = (id, name, category, muscleGroup, equipment, notes) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE exercises SET name = ?, category = ?, muscle_group = ?, equipment = ?, notes = ? WHERE id = ?;',
        [name, category, muscleGroup, equipment, notes, id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteExercise = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM exercises WHERE id = ?;',
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getExerciseById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM exercises WHERE id = ?;',
        [id],
        (_, { rows: { _array } }) => {
          resolve(_array[0]);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const searchExercises = (searchTerm) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM exercises WHERE name LIKE ? OR category LIKE ? OR muscle_group LIKE ? ORDER BY name;',
        [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export default db;
