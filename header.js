const headerNav = `
    <header>
        <div class="header-content">
            <h1 class="site-title">SLAP</h1>
            <h6 class="site-tagline">Access Justice.</h6>
            <a href="login.html" class="log-in">Log In</a>
        </div>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="testimonials.html">Testimonials</a>
        <div class="dropdown">
            <a href="javascript:void(0);" class="dropdown-toggle">Services<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="services.html">How It Works</a>
                <a href="plans.html">Explore Tiers</a>
                <a href="ai.html">AI Evaluation Tool</a>
                <a href="insurance.html">Insurance</a>
                <a href="submission.html">Submit a Case</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="javascript:void(0);" class="dropdown-toggle">Partnerships<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="partnerships.html">Trusted Firms</a>
                <a href="for_lawyers.html">For Lawyers</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="javascript:void(0);" class="dropdown-toggle">About<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="about.html">Leadership Team</a>
                <a href="disclaimers.html">Disclaimers</a>
            </div>
        </div>
    </nav>

    <style>
        /* Reset and Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Header Styles */
        header {
            background: linear-gradient(to right, #25527f, #5e88b1);
            padding: 1rem;
            position: relative;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }

        .site-title {
            font-size: 3.5rem;
            color: #fff;
            font-weight: 700;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .site-tagline {
            color: #e3f2fd;
            font-family: 'Georgia', serif;
            font-size: 1.4rem;
            margin-top: 0.5rem;
            font-style: italic;
            text-align: center;
        }

        .log-in {
            position: absolute;
            top: 1rem;
            right: 0.5rem; /* Adjusted this value to move it further to the right */
            background: #ffffff;
            color: #007aff;
            border: 1px solid #007aff;
            border-radius: 12px;
            padding: 0.3rem 0.8rem;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .log-in:hover {
            background: #007aff;
            color: #ffffff;
        }

        nav {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffffff;
            padding: 1rem;
            border-bottom: 1px solid #e5e7eb;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav a {
            color: #007aff;
            margin: 0 1.5rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            position: relative;
            transition: color 0.3s ease, transform 0.3s ease;
        }

        nav a:hover {
            color: #0056b3;
            transform: scale(1.1);
        }

        /* Dropdown Styles */
        .dropdown {
            position: relative;
        }

        .dropdown-toggle {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
        }

        .arrow {
            margin-left: 0.5rem;
            font-size: 0.8rem;
            transition: transform 0.3s;
        }

        .dropdown:hover .arrow {
            transform: rotate(180deg);
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        /* Dropdown menu */
        .dropdown-content {
            display: none; /* Hidden by default */
            position: absolute;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid #ddd;
            border-radius: 8px;
            z-index: 1000;
            min-width: 220px; /* Ensures enough width for text */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            padding: 0.5rem 0; /* Adds some space around the items */
        }

        /* Dropdown menu items */
        .dropdown-content a {
            display: block;
            padding: 0.5rem 1rem; /* Adds enough padding to prevent wrapping */
            color: #333;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem; /* Increase font size slightly for better readability */
            white-space: nowrap; /* Prevent text from wrapping */
            transition: background 0.3s, color 0.3s;
        }

        .dropdown-content a:hover {
            background: #007aff; /* Highlight background on hover */
            color: #fff;
        }

        /* Footer Styles */
        footer {
            background: #25527f;
            color: #ffffff;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
            font-size: 0.9rem;
        }

        footer a {
            color: #e3f2fd;
            text-decoration: underline;
        }

        footer a:hover {
            text-decoration: none;
        }
    </style>
`;

document.getElementById("header-container").innerHTML = headerNav;
