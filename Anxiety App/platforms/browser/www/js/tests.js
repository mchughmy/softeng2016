

/* This file should contain the automated Tests
*  for the Anxiety app.  These tests are run using QUnit.
*  For Usage, please see the "cookbook" at: https://qunitjs.com/cookbook/ */


/* Test to ensure QUnit is running.
* If this test fails, we have bigger issues. */
QUnit.test( "Sanity Test", function( assert ) {

  assert.ok( true, "QUnit is running." );

});

/* Get the current page name using the function.
*  it SHOULD return the filename from the current filepath.
* i.e. 'C:\folder\test.html', should return 'test.html' */
QUnit.test("Test getCurrentPage()", function( assert){
  var currentPage = window.location.href.split('/'); /*split filepath into tokens*/
  var fileName = currentPage[currentPage.length-1]; /* get last item on list */

  assert.equal(fileName,getCurrentPage(),"Got Page Name Successfully");

});

/* This SHOULD return a JS Date object for a given JSON date string.
*  If a JS date is passed, just return the Date */
QUnit.test("Testing JSON Date Formatter [getJsDateFromJSON()]", function( assert){
  var testDate = new Date('2016-11-02T12:00:00Z');
  var testJSON = '2016-11-02T12:00:00.000Z';

  assert.equal(testDate.getTime(),getJsDateFromJSON(testJSON).getTime(),"JS Date == JSON Date");
  assert.equal(testDate.getTime(),getJsDateFromJSON(testDate).getTime(),"JS dates return as JS dates");
  assert.equal(null,getJsDateFromJSON(null),"Inputing Null returns Null");

});
