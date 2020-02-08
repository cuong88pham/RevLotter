import React from 'react';

const PageLotteryTicketsComponent = () => {
  return (
    <div className="container home lottery-tickets ">
      <section className="single-categories-play-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-cat-play-area">
                <div className="single-header d-flex justify-content-end">
                  <div className="right text-right">
                    <div className="header-btn-area">
                      <button type="button" id="quick-pick-all">
                        Quick Pick All
                      </button>
                      <button type="button" id="add-item">
                        <i className="fa fa-plus" />
                      </button>
                      <button type="button" id="delete-item">
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* single-header end */}
                <div className="single-body pt-4 pb-4">
                  <div className="single-body-inner d-flex">
                    <div className="play-card">
                      <button type="button" className="close-play-card">
                        <i className="fa fa-times">x</i>
                      </button>
                      <div className="play-card-inner text-center">
                        <div className="play-card-header">
                          <span className="number-amount">Pick 5 Numbers</span>
                          <div className="header-btn-area">
                            <button type="button" id="quick-pick1">
                              quick pick
                            </button>
                            <button type="button" id="clear-pick1">
                              clear
                            </button>
                          </div>
                        </div>
                        <div className="play-card-body">
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li className="active">9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li className="active">13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li className="active">20</li>
                            <li>21</li>
                            <li className="active">22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li className="active">29</li>
                            <li>30</li>
                            <li>31</li>
                            <li>32</li>
                            <li>33</li>
                            <li>34</li>
                            <li>35</li>
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                            <li>45</li>
                            <li>46</li>
                            <li>47</li>
                            <li>48</li>
                            <li>49</li>
                            <li>50</li>
                          </ul>
                          <span className="add-more-text">All Selected</span>
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li className="active">8</li>
                            <li>9</li>
                            <li>10</li>
                          </ul>
                        </div>
                        <div className="play-card-footer">
                          <p className="play-card-footer-text">
                            Selected Numbers:
                          </p>
                          <div className="selected-numbers">
                            <span>9</span>
                            <span>13</span>
                            <span>20</span>
                            <span>22</span>
                            <span>29</span>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* play-card end */}
                    <div className="play-card">
                      <button type="button" className="close-play-card">
                        <i className="fa fa-times">x</i>
                      </button>
                      <div className="play-card-inner text-center">
                        <div className="play-card-header">
                          <span className="number-amount">Pick 5 Numbers</span>
                          <div className="header-btn-area">
                            <button type="button" id="quick-pick2">
                              quick pick
                            </button>
                            <button type="button" id="clear-pick2">
                              clear
                            </button>
                          </div>
                        </div>
                        <div className="play-card-body">
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li className="active">9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li className="active">13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li className="active">20</li>
                            <li>21</li>
                            <li className="active">22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li className="active">29</li>
                            <li>30</li>
                            <li>31</li>
                            <li>32</li>
                            <li>33</li>
                            <li>34</li>
                            <li>35</li>
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                            <li>45</li>
                            <li>46</li>
                            <li>47</li>
                            <li>48</li>
                            <li>49</li>
                            <li>50</li>
                          </ul>
                          <span className="add-more-text">All Selected</span>
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li className="active">8</li>
                            <li>9</li>
                            <li>10</li>
                          </ul>
                        </div>
                        <div className="play-card-footer">
                          <p className="play-card-footer-text">
                            Selected Numbers:
                          </p>
                          <div className="selected-numbers">
                            <span>9</span>
                            <span>13</span>
                            <span>20</span>
                            <span>22</span>
                            <span>29</span>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* play-card end */}
                    <div className="play-card">
                      <button type="button" className="close-play-card">
                        <i className="fa fa-times">x</i>
                      </button>
                      <div className="play-card-inner text-center">
                        <div className="play-card-header">
                          <span className="number-amount">Pick 5 Numbers</span>
                          <div className="header-btn-area">
                            <button type="button" id="quick-pick3">
                              quick pick
                            </button>
                            <button type="button" id="clear-pick3">
                              clear
                            </button>
                          </div>
                        </div>
                        <div className="play-card-body">
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li className="active">9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li className="active">13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li className="active">20</li>
                            <li>21</li>
                            <li className="active">22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li className="active">29</li>
                            <li>30</li>
                            <li>31</li>
                            <li>32</li>
                            <li>33</li>
                            <li>34</li>
                            <li>35</li>
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                            <li>45</li>
                            <li>46</li>
                            <li>47</li>
                            <li>48</li>
                            <li>49</li>
                            <li>50</li>
                          </ul>
                          <span className="add-more-text">All Selected</span>
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li className="active">8</li>
                            <li>9</li>
                            <li>10</li>
                          </ul>
                        </div>
                        <div className="play-card-footer">
                          <p className="play-card-footer-text">
                            Selected Numbers:
                          </p>
                          <div className="selected-numbers">
                            <span>9</span>
                            <span>13</span>
                            <span>20</span>
                            <span>22</span>
                            <span>29</span>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* play-card end */}
                    <div className="play-card">
                      <button type="button" className="close-play-card">
                        <i className="fa fa-times">x</i>
                      </button>
                      <div className="play-card-inner text-center">
                        <div className="play-card-header">
                          <span className="number-amount">Pick 5 Numbers</span>
                          <div className="header-btn-area">
                            <button type="button" id="quick-pick4">
                              quick pick
                            </button>
                            <button type="button" id="clear-pick4">
                              clear
                            </button>
                          </div>
                        </div>
                        <div className="play-card-body">
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li className="active">9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li className="active">13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li className="active">20</li>
                            <li>21</li>
                            <li className="active">22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li className="active">29</li>
                            <li>30</li>
                            <li>31</li>
                            <li>32</li>
                            <li>33</li>
                            <li>34</li>
                            <li>35</li>
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                            <li>45</li>
                            <li>46</li>
                            <li>47</li>
                            <li>48</li>
                            <li>49</li>
                            <li>50</li>
                          </ul>
                          <span className="add-more-text">All Selected</span>
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li className="active">8</li>
                            <li>9</li>
                            <li>10</li>
                          </ul>
                        </div>
                        <div className="play-card-footer">
                          <p className="play-card-footer-text">
                            Selected Numbers:
                          </p>
                          <div className="selected-numbers">
                            <span>9</span>
                            <span>13</span>
                            <span>20</span>
                            <span>22</span>
                            <span>29</span>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* play-card end */}
                    <div className="play-card">
                      <button type="button" className="close-play-card">
                        <i className="fa fa-times">x</i>
                      </button>
                      <div className="play-card-inner text-center">
                        <div className="play-card-header">
                          <span className="number-amount">Pick 5 Numbers</span>
                          <div className="header-btn-area">
                            <button type="button" id="quick-pick5">
                              quick pick
                            </button>
                            <button type="button" id="clear-pick5">
                              clear
                            </button>
                          </div>
                        </div>
                        <div className="play-card-body">
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li className="active">9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li className="active">13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li className="active">20</li>
                            <li>21</li>
                            <li className="active">22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li className="active">29</li>
                            <li>30</li>
                            <li>31</li>
                            <li>32</li>
                            <li>33</li>
                            <li>34</li>
                            <li>35</li>
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                            <li>45</li>
                            <li>46</li>
                            <li>47</li>
                            <li>48</li>
                            <li>49</li>
                            <li>50</li>
                          </ul>
                          <span className="add-more-text">All Selected</span>
                          <ul className="number-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li className="active">8</li>
                            <li>9</li>
                            <li>10</li>
                          </ul>
                        </div>
                        <div className="play-card-footer">
                          <p className="play-card-footer-text">
                            Selected Numbers:
                          </p>
                          <div className="selected-numbers">
                            <span>9</span>
                            <span>13</span>
                            <span>20</span>
                            <span>22</span>
                            <span>29</span>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* play-card end */}
                  </div>
                </div>
                {/* single-body end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageLotteryTicketsComponent;
