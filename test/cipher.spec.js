describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "fghijklmnopqrstuvwxyzabcde" para "abcdefghijklmnopqrstuvwxyz" con offset 5', () => {
      assert.equal(cipher.encode(5,"abcdefghijklmnopqrstuvwxyz"), "fghijklmnopqrstuvwxyzabcde");
    });
    it('debería retornar "1234567890" para "0123456789" con offset 51', () => {
      assert.equal(cipher.encode(51,"0123456789"), "1234567890");
    });
    it('debería retornar "¡ubyn YnObEnGbEvN! rfgr rf zv ceblrpgb 8" para "¡hola LaBoRaToRiA! este es mi proyecto 1" con offset -13', () => {
      assert.equal(cipher.encode(-13, "¡hola LaBoRaToRiA! este es mi proyecto 1"),"¡ubyn YnObEnGbEvN! rfgr rf zv ceblrpgb 8");
    });
  
  
  
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "fghijklmnopqrstuvwxyzabcde" con offset 5', () => {
      assert.equal(cipher.decode(5,"fghijklmnopqrstuvwxyzabcde"), "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "0123456789" para "1234567890" con offset 51', () => {
      assert.equal(cipher.decode(51,"1234567890"), "0123456789");
    });
    it('debería retornar "¡hola LaBoRaToRiA! este es mi proyecto 1" para "¡ubyn YnObEnGbEvN! rfgr rf zv ceblrpgb 8" con offset -13', () => {
      assert.equal(cipher.decode(-13, "¡ubyn YnObEnGbEvN! rfgr rf zv ceblrpgb 8"),"¡hola LaBoRaToRiA! este es mi proyecto 1");
    });
    
  });

});