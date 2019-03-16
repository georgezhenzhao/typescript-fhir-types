import * as account_profile from './samples/account.profile.json';
import { RTTI_StructureDefinition } from '../Resource/RTTI_StructureDefinition';

describe('StructureDefinition', () => {
  
  test('should decode account.profile.json', () => {
      const result = RTTI_StructureDefinition.decode(account_profile);
      expect(result._tag).toBe('Right');    
  })

  

})