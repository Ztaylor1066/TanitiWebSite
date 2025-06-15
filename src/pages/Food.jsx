function Food() {
  return (
    <>
      <div>
        <h1 className="pageTitle">Taste of Taniti</h1>
        <h2 className="foodOverview">
          Taniti currently has 10 restaurants: five serve mostly local fish and
          rice, three serve American-style meals, and two serve Pan-Asian
          cuisine.
        </h2>
        <h2 className="top3">Our Top Choices</h2>
      </div>
      <div className="restaurantOne">
        <h1>Best Local: The Tapa Grill</h1>
        <h3>
          Nestled along a quiet stretch of beach, The Tapa Grill specializes in
          freshly caught reef fish grilled over open flame, served with tropical
          fruit glazes and island-grown rice. With thatched-roof seating and
          live ukulele music at sunset, it offers an authentic taste of
          traditional Tanitian flavors in a laid-back, breezy setting.
        </h3>
      </div>
      <div className="restaurantTwo">
        <h1>Best American Style: Volcano Diner</h1>
        <h3>
          Located near the base of Taniti’s volcanic mountains, this retro-style
          American diner serves up burgers, fries, and milkshakes with a local
          twist—like pineapple-chili ketchup and taro root fries. It’s a
          favorite stop for hikers and families exploring the interior trails.
        </h3>
      </div>
      <div className="restaurantThree">
        <h1>Best Pan-Asian: Wok & Wave</h1>
        <h3>
          Overlooking the harbor, Wok & Wave fuses Pan-Asian flavors with
          Tanitian ingredients, offering dishes like coconut miso ramen and
          lemongrass grilled shrimp. With modern décor and open-air seating,
          it’s popular among tourists looking for bold flavors in a stylish
          setting.
        </h3>
      </div>
    </>
  );
}

export default Food;
