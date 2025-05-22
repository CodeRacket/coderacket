from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    load_dotenv()   # Load from .env file
    app = Flask(__name__)

    app.config.from_object('config.Config')

    db.init_app(app)
    login_manager.init_app(app)
    Migrate(app, db) # Flask-Migrate setup

    from app.routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app




