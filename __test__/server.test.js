
test('Cors middleware is properly configured', () => {
    expect(app._router.stack[2].name).toBe('cors');
  });
  