amgifford.com
==============

Personal Homepage of Abigail Gifford (found at http://www.amgifford.com). Uses Mynt. Hosted on AWS S3.

Usage
-----

To generate the static files:

    mynt gen -c _source/ _site/

To serve the website locally:

    mynt serve _site/

Update S3 bucket:

    s3cmd sync --add-header='Cache-Control: max-age=31536000' _site/ s3://www.amgifford.com