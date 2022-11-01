/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
const itActsAsFavoriteRestoranModel = (favoriteRestoran) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestoran.putRestoran({ id: 1 });
    favoriteRestoran.putRestoran({ id: 2 });

    expect(await favoriteRestoran.getRestoran(1))
      .toEqual({ id: 1 });

    expect(await favoriteRestoran.getRestoran(2))
      .toEqual({ id: 2 });

    expect(await favoriteRestoran.getRestoran(3))
      .toEqual(undefined);
  });

  it('should refuse a restoran from being added if it does not have the correct property', async () => {
    favoriteRestoran.putRestoran({ aProperty: 'property' });

    expect(await favoriteRestoran.getAllRestorans())
      .toEqual([]);
  });

  it('can return all of the restoran that have been added', async () => {
    favoriteRestoran.putRestoran({ id: 1 });
    favoriteRestoran.putRestoran({ id: 2 });

    expect(await favoriteRestoran.getAllRestorans())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restoran', async () => {
    favoriteRestoran.putRestoran({ id: 1 });
    favoriteRestoran.putRestoran({ id: 2 });
    favoriteRestoran.putRestoran({ id: 3 });

    await favoriteRestoran.deleteRestoran(1);

    expect(await favoriteRestoran.getAllRestorans())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restoran even though the restoran has not been added', async () => {
    favoriteRestoran.putRestoran({ id: 1 });
    favoriteRestoran.putRestoran({ id: 2 });
    favoriteRestoran.putRestoran({ id: 3 });

    await favoriteRestoran.deleteRestoran(4);

    expect(await favoriteRestoran.getAllRestorans())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoranModel };
