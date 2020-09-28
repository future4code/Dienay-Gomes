//entradas
export enum LOCATION {
	EUA = "EUA",
	BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
BRAZILIAN = "BRAZILIAN",
AMERICAN = "AMERICAN",
}

export interface UserVerifyAge {
name: string;
age: number;
nacionality: NACIONALITY;
}

export interface Casino {
name: string;
location: LOCATION;
}

//saidas
export interface Result {
	brazilians: ResultItem;
	americans: ResultItem;
}

export interface ResultItem {
allowed: string[];
unallowed: string[];
}

export function verifyAge(casino: Casino, users: UserVerifyAge[]): Result {
	const allowed: UserVerifyAge[] = [];
	const unallowed: UserVerifyAge[] = [];
  
	for (const user of users) {
	  if (casino.location === LOCATION.EUA) {
		if (user.age >= 21) {
		  allowed.push(user);
		} else {
		  unallowed.push(user);
		}
	  } else if (casino.location === LOCATION.BRAZIL) {
		if (user.age >= 18) {
		  allowed.push(user);
		} else {
		  unallowed.push(user);
		}
		break;
	  }
	}
	return {
		brazilians: {
		  allowed: allowed
			.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
			.map((u) => u.name),
		  unallowed: unallowed
			.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
			.map((u) => u.name),
		},
		americans: {
		  allowed: allowed
			.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
			.map((u) => u.name),
		  unallowed: unallowed
			.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
			.map((u) => u.name),
		},
	  };
	}
